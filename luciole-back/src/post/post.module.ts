import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post } from './post.entity';
import { Media } from '../media/media.entity';
import { Tag } from 'src/tag/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Media, Tag])],
  controllers: [PostController],
  providers: [PostService],
  exports: [TypeOrmModule],
})
export class PostModule {}
