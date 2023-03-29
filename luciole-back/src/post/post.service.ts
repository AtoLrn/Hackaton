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

  async getAllPost(): Promise<any> {
    try{
        const posts = await this.postsRepository.find({relations: {medias: true}})

        return posts
    } catch (error) {
        return error
    }
  }

  async addPosts(post: any, files: any): Promise<any> {
    try {
      const newPost = await this.postsRepository.save(post);

      files.map(async (file) => {
        const newMedia = await this.mediaRepository.save({
          path: file.path,
          post: newPost,
        });

        return newMedia;
      });

      return {
        ...newPost,
        files
      }
    } catch (error) {
      return error;
    }
  }
}
