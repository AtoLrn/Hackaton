import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private usersRepository: Repository<Post>,
  ) {}

  getPosts(): string {
    const today = new Date();
    return 'Hello World!';
  }
}
