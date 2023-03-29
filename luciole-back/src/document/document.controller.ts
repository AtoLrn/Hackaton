import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { DocumentService } from './document.service';

@Controller('/document')
export class TagController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './uploads/document',
    }),
  )
  async postDocument(@UploadedFile() file: Express.Multer.File) {
    const tags = await this.documentService.analyze(file);
    const savedFile = await this.documentService.saveDocument(file, tags);
    return {
      id: savedFile.id,
    };
  }
}
