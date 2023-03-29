import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Media } from '../media/media.entity';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    @InjectRepository(Media)
    private mediaRepository: Repository<Media>,
  ) {}

  getPosts(): string {
    const today = new Date();
    return 'test';
  }

  async addPosts(post: any, files: any): Promise<string> {
    try{
        const newPost = await this.postsRepository.save(post)
        
        files.map(async file => {
            const newMedia = await this.mediaRepository.save({
                path: file.path,
                post: newPost
            })

            return newMedia
        })

        console.log(files)
    } finally {
        return 'hey'
    }
  }

}
