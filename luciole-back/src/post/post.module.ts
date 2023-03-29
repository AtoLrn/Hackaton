import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post } from './post.entity';
import { Media } from '../media/media.entity';
import { SecurityModule } from 'src/security/security.module';
import { User } from 'src/user/user.entity';
import { Tag } from 'src/tag/tag.entity';
import { Document } from 'src/document/document.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, Media, User, Tag, Document]),
    SecurityModule,
  ],
  controllers: [PostController],
  providers: [PostService],
  exports: [TypeOrmModule],
})
export class PostModule {}
