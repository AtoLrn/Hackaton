import { Controller, Get } from '@nestjs/common';
import { MediaService } from './media.service';

@Controller('/media')
export class MediaController {
  constructor(private readonly postService: MediaService) {}

  @Get()
  getMedia(): string {
    return this.postService.getPosts();
  }
}
