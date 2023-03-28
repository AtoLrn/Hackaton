import { Controller, Get } from '@nestjs/common';
import { PostService } from './app.service';

@Controller('/post')
export class PostController {
  constructor(private readonly appService: PostService) {}

  @Get()
  getHello(): string {
    return this.appService.getPosts();
  }
}
