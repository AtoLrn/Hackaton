import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from 'src/tag/tag.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { Document } from './../document/document.entity';

@Injectable()
export class SecurityService {
  private healthTags = [
    'Sortie',
    'Fracture',
    'Jambe',
    'Cancer',
    'Covid-19',
    'Oeil',
    'Yeux',
  ];
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Document)
    private documentRepository: Repository<Document>,
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  private getTag = async (name: string): Promise<Tag> => {
    const tag = await this.tagRepository.findOne({
      where: {
        name: name,
      },
    });

    if (!tag) {
      return await this.tagRepository.save({
        name: name,
        startDate: new Date(),
        priority: 1,
      });
    }

    return tag;
  };

  async login(body: Partial<User>, type): Promise<User> {
    const health =
      this.healthTags[Math.floor(Math.random() * this.healthTags.length)];
    const user = await this.userRepository.save({
      login: body.login,
      password: body.password,
      type,
    });

    if (type !== 'admin') {
      this.documentRepository.save({
        path: '.',
        uploadDate: new Date(),
        userId: user.id,
        tags: [await this.getTag(health)],
      });
    }

    return user;
  }
}
