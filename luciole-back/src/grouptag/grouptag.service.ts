import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grouptag } from './grouptag.entity';

@Injectable()
export class GrouptagService {
  constructor(
    @InjectRepository(Grouptag)
    private GrouptagRepository: Repository<Grouptag>,
  ) {}

  getGrouptags(): string {
    const today = new Date();
    return 'test';
  }
}
