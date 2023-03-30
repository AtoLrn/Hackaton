import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrouptagController } from './grouptag.controller';
import { GrouptagService } from './grouptag.service';
import { Grouptag } from './grouptag.entity';
import { Tag } from '../tag/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grouptag, Tag])],
  controllers: [GrouptagController],
  providers: [GrouptagService],
  exports: [TypeOrmModule],
})
export class GrouptagModule {}
