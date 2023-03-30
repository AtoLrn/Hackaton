import { Controller, Delete, Get, Param } from '@nestjs/common';
import { MediaService } from './media.service';

@Controller('/media')
export class MediaController {
  constructor(private readonly postService: MediaService) {}

  @Get('/:id')
  deleteMedia(@Param('id') id): string {
    return this.postService.deleteMedia(id);
  }
}
