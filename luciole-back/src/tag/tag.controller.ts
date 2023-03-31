import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Tag } from './tag.entity';
import { TagService } from './tag.service';

@Controller('/tag')
export class TagController {
  constructor(private readonly appService: TagService) {}

  @Get()
  async getTags() {
    return {
      tags: await this.appService.getTags(),
    };
  }

  @Get(':id')
  async getTag(@Param('id') id: string) {
    return {
      tags: await this.appService.getTag(id),
    };
  }

  @Post()
  async createTag(@Body() body: Tag) {
    return {
      tag: await this.appService.createTag(body),
    };
  }

  @Post('/:id')
  async updateTag(@Param('id') id: string, @Body() body: Partial<Tag>) {
    return {
      tag: await this.appService.updateTag(id, body),
    };
  }

  @Delete('/:id')
  deletePost(@Param('id') id) {
    return this.appService.deleteTag(id)
  }

}
