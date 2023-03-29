import { Body, Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { MediaService } from './app.service';

@Controller('/media')
export class MediaController {
  constructor(private readonly postService: MediaService) {}

  @Get()
  getMedia(): string {
    return this.postService.getPosts();
  }
}
