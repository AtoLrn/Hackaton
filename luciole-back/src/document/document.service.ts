import { Injectable } from '@nestjs/common';
import { TagService } from './../tag/tag.service';

import { recognize } from 'tesseract.js';
import { Document } from './document.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from 'src/tag/tag.entity';
import { join } from 'path';
import { readFileSync } from 'fs';
import { User } from 'src/user/user.entity';

@Injectable()
export class DocumentService {
  constructor(
    private readonly appService: TagService,
    @InjectRepository(Document)
    private documentRepository: Repository<Document>,
  ) {}

  async analyze(file: Express.Multer.File): Promise<Tag[]> {
    const path = join(process.cwd(), file.path);
    const fileBuffer = readFileSync(path);

    const res = await recognize(fileBuffer);

    const tags = await this.appService.getTags();

    const searchText = res.data.text;

    const documentTags = tags.reduce<Tag[]>((acc, val) => {
      if (
        searchText.toLocaleLowerCase().includes(val.name.toLocaleLowerCase())
      ) {
        acc.push(val);
      }
      return acc;
    }, []);

    return documentTags;
  }

  async saveDocument(file: Express.Multer.File, tags: Tag[], user: User) {
    return await this.documentRepository.save({
      path: file.path,
      userId: user.id,
      tags,
      uploadDate: new Date(),
    });
  }
}
