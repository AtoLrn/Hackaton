import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getPosts(): string {
    const today = new Date();
    return 'Hello World!';
  }
}
