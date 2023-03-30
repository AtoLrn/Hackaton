import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Media } from '../media/media.entity';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { User } from 'src/user/user.entity';
import { Tag } from 'src/tag/tag.entity';
import { Document } from 'src/document/document.entity';

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

  async addPosts(post: any, files: any): Promise<Post> {
    const tags = await this.tagRepository.find();

    const { content } = post;

    const documentTags = tags.reduce<Tag[]>((acc, val) => {
      if (content.toLocaleLowerCase().includes(val.name.toLocaleLowerCase())) {
        acc.push(val);
      }
      return acc;
    }, []);

    post.tags = documentTags;

    const newPost = await this.postsRepository.save(post);

    files.map(async (file) => {
      const newMedia = await this.mediaRepository.save({
        path: file.path,
        post: newPost,
      });

      return newMedia;
    });

    return newPost;
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
