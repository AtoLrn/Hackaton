import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';
import { Body, Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import {FilesInterceptor} from '@nestjs/platform-express';
import { PostService } from './app.service';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { diskStorage } from 'multer';

@Controller('/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPost(): string {
    return this.postService.getPosts();
  }

  @Post()
  @UseInterceptors(FilesInterceptor('files', 10, {
    storage: diskStorage({
        destination: "./files",
        filename: (req, file, cb) => {
            const fileName = uuidv4()
            cb(null, `${fileName}${extname(file.originalname)}`)
        }
    })
  }))
  addPost(@UploadedFiles() files, @Body() body: any): Promise<string> {
    const { title, content, type } = body;

    const toPublishAt = new Date(body.toPublishAt)

    const newPost = {
        title,
        content,
        toPublishAt,
        type
    }

    return this.postService.addPosts(newPost, files);
  }
}
