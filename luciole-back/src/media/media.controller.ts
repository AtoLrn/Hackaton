import { Controller, Delete, Param } from '@nestjs/common';
import { MediaService } from './media.service';

@Controller('/media')
export class MediaController {
  constructor(private readonly postService: MediaService) {}

  @Delete('/:id')
  deleteMedia(@Param('id') id) {
    return this.postService.deleteMedia(id);
  }
}
