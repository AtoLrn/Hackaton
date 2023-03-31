import { PostService } from './post.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { JwtGuard } from 'src/security/local.auth';
import { Post as P } from './post.entity';

@Controller('/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPost(): Promise<any> {
    return await this.postService.getAllPost();
  }

  @Get('/search')
  getPostBySearch(@Query('title') title) {
    return this.postService.searchPost(title)
  }

  @Get('/targetted')
  @UseGuards(JwtGuard)
  getUserInterestingPost(@Request() { user }) {
    return this.postService.getTargettedPost(user);
  }

  @Get('/:id')
  getPostById(@Param('id') id) {
    return this.postService.getPost(id)
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
  addPost(@UploadedFiles() files, @Body() body: any): Promise<P> {
    const { title, content, type } = body;

    const toPublishAt = new Date(body.toPublishAt ?? null);

    const newPost = {
      title,
      content,
      toPublishAt,
      type,
    };

    return this.postService.addPosts(newPost, files);
  }

  @Put('/:id')
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
  async updatePost(@UploadedFiles() files, @Body() body: any, @Param('id') id) {
    const { title, content, type } = body;

    const toPublishAt = new Date(body.toPublishAt ?? null);

    const newPost = {
      title,
      content,
      toPublishAt,
      type,
    };

    return await this.postService.updatePost(newPost, files, id);
  }

  @Delete('/:id')
  deletePost(@Param('id') id) {
    return this.postService.deletePost(id)
  }
}
