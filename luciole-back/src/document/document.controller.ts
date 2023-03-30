import {
  Controller,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtGuard } from 'src/security/local.auth';

import { DocumentService } from './document.service';

@Controller('/document')
export class TagController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  @UseGuards(JwtGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './uploads/document',
    }),
  )
  async postDocument(
    @UploadedFile() file: Express.Multer.File,
    @Request() { user },
  ) {
    const tags = await this.documentService.analyze(file);
    const savedFile = await this.documentService.saveDocument(file, tags, user);
    return {
      id: savedFile.id,
    };
  }
}
