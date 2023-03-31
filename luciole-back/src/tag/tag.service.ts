import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  async getTags(): Promise<Tag[]> {
    return await this.tagRepository.find();
  }

  async getTag(id: string): Promise<Tag> {
    return await this.tagRepository.findOne({
      where: {
        id: parseInt(id),
      },
    });
  }

  async createTag(body: Tag): Promise<Tag> {
    return await this.tagRepository.save({
      name: body.name,
      startDate: body.startDate,
      endDate: body.endDate,
      weeks: body.weeks,
    });
  }

  async updateTag(id: string, body: Partial<Tag>): Promise<Tag> {
    const tag = await this.getTag(id);
    return await this.tagRepository.save({
      ...tag,
      ...body,
    });
  }

  async deleteTag(id): Promise<any> {
    const deletedPost = await this.tagRepository.delete(id)

    return "Successfully deleted"
  }
}
