import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from './media.entity';
import * as fs from 'fs';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private mediaRepository: Repository<Media>,
  ) {}

  async deleteMedia(id) {
    const media = await this.mediaRepository.find({
        where: {id: id}
    })

    try {
        await this.mediaRepository.delete(media[0].id)

        const filePath = `${__dirname}/../../${media[0].path}`
        fs.exists(filePath, exist => {
            if(exist) {
                fs.unlink(filePath, err => {
                    if (err) throw err
                })
            }
        })

        return "Media deleted"
    } catch (error) {
        return error
    }
  }
}
