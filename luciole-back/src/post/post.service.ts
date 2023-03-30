import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Media } from '../media/media.entity';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { User } from 'src/user/user.entity';
import { Tag } from 'src/tag/tag.entity';
import { Document } from 'src/document/document.entity';
import { S3 } from 'aws-sdk';
import { readFileSync } from 'fs';
import { join } from 'path';
import {
  StartTranscriptionJobCommand,
  TranscribeClient,
} from '@aws-sdk/client-transcribe';
import * as fs from 'fs';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    @InjectRepository(Media)
    private mediaRepository: Repository<Media>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
    @InjectRepository(Document)
    private documentRepository: Repository<Document>,
  ) {}

  async getAllPost(): Promise<any> {
    try {
      const posts = await this.postsRepository.find({
        relations: { medias: true },
      });

      return posts;
    } catch (error) {
      return error;
    }
  }

  private getPostTag = (content: string, tags: Tag[]): Tag[] => {
    return tags.reduce<Tag[]>((acc, val) => {
      if (content.toLocaleLowerCase().includes(val.name.toLocaleLowerCase())) {
        acc.push(val);
      }
      return acc;
    }, []);
  };
  //TODO
  async addPosts(post: any, files: any): Promise<Post> {
    const transcribeClient = new TranscribeClient({
      region: process.env.REGION,
      credentials: {
        accessKeyId: process.env.accessKeyId,
        secretAccessKey: process.env.secretAccessKey,
      },
    });

    const s3 = new S3({
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey,
    });

    const tags = await this.tagRepository.find();

    const { content, type } = post;

    const documentTags = this.getPostTag(content, tags);

    post.tags = documentTags;

    const newPost = await this.postsRepository.save(post);

    files.forEach(async (file) => {
      await this.mediaRepository.save({
        path: file.path,
        post: newPost,
      });
    });

    if (type === 'video') {
      const path = join(process.cwd(), files[0].path);
      const fileBuffer = readFileSync(path);
      const params = {
        Bucket: 'hackaton-esgi',
        Key: `${files[0].filename}`,
        Body: fileBuffer,
      };
      const prom = new Promise((res, rej) => {
        s3.upload(params, (err, data) => {
          if (err) {
            rej(err);
          }
          res(data.Location);
        });
      });
      const data = await prom;

      const paramsTranscribe = {
        TranscriptionJobName: files[0].filename,
        LanguageCode: 'fr-FR',
        Media: {
          MediaFileUri: data as string,
        },
        OutputBucketName: 'hackaton-esgi',
      };

      await transcribeClient.send(
        new StartTranscriptionJobCommand(paramsTranscribe),
      );

      setTimeout(async () => {
        const request = {
          Bucket: 'hackaton-esgi',
          Key: `${files[0].filename}.json`,
        };

        s3.getObject(request, (_, data) => {
          if (data.Body) {
            const documentTags = this.getPostTag(
              JSON.parse(data.Body.toString()).results.transcripts[0]
                .transcript,
              tags,
            );

            this.postsRepository.save({ ...newPost, tags: documentTags });
          } else {
            console.error('Didnt found the document....');
          }
        });
      }, 60000);
    }

    return newPost;
  }

  async getPost(id) {
    const post = await this.postsRepository.find({
        where: {id: id},
        relations: {medias: true}
    });

    return post[0]
  }

  async updatePost(id) {
    const post = await this.postsRepository.find({
        where: {id: id},
        relations: {medias: true}
    });
    return 'hey'
  }

  async deletePost(id): Promise<any> {
    const post = await this.postsRepository.find({
        where: {id: id},
        relations: {medias: true}
    });

    post[0].medias.forEach(media => {
        const filePath = `${__dirname}/../../${media.path}`
        fs.exists(filePath, exist => {
            if(exist) {
                fs.unlink(filePath, err => {
                    if (err) throw err
                })
            }
        })
    })

    const deletedPost = await this.postsRepository.delete(id)

    return "Successfully deleted"
  }

  private calcTimeModifier(timeDiff: number) {
    return Math.exp((365 - timeDiff) / 365 + 1);
  }

  async getTargettedPost(user: User): Promise<Post[]> {
    const docProm = await this.documentRepository.find({
      where: {
        userId: user.id,
      },
      relations: {
        tags: true,
      },
    });

    const postProm = await this.postsRepository.find({
      relations: {
        tags: true,
      },
    });

    const [documents, posts] = await Promise.all([docProm, postProm]);

    const now = new Date();

    const tagsWeigth = documents.reduce((acc, val) => {
      const tsDiff = now.getTime() - val.uploadDate.getTime();
      const diffInDays = Math.ceil(tsDiff / (1000 * 3600 * 24));
      val.tags.forEach((tag) => {
        if (tag.name in acc) {
          acc[tag.name] = acc[tag.name] + this.calcTimeModifier(diffInDays);
        } else {
          acc[tag.name] = this.calcTimeModifier(diffInDays);
        }
      });
      return acc;
    }, {});

    const totalTags = (tags: Tag[]) => {
      return tags.reduce((acc, val) => {
        if (!(val.name in tagsWeigth)) return acc + 0.5;

        if (val.startDate > now || (val.endDate && val.endDate < now))
          return acc;

        return acc + tagsWeigth[val.name] * val.priority;
      }, 0);
    };

    const postsOrdered = posts.sort((postA, postB) => {
      const totalPostA = totalTags(postA.tags);

      const totalPostB = totalTags(postB.tags);

      return totalPostB - totalPostA;
    });

    return postsOrdered;
  }
}
