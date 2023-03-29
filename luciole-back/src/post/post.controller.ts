import { PostService } from './post.service';
import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { diskStorage } from 'multer';

@Controller('/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPost(): Promise<any> {
    return await this.postService.getAllPost();
  }

  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: './uploads/post',
        filename: (req, file, cb) => {
          const fileName = uuidv4();
          cb(null, `${fileName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async addPost(@UploadedFiles() files, @Body() body: any): Promise<string> {
    const { title, content, type } = body;

    const toPublishAt = new Date(body.toPublishAt);

    const newPost = {
      title,
      content,
      toPublishAt,
      type,
    };

    return await this.postService.addPosts(newPost, files);
  }
}
