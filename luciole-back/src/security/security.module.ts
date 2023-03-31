import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Document } from 'src/document/document.entity';
import { Tag } from 'src/tag/tag.entity';
import { User } from 'src/user/user.entity';
import { TagController } from './security.controller';
import { SecurityService } from './security.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Document, Tag])],
  controllers: [TagController],
  providers: [SecurityService],
  exports: [TypeOrmModule],
})
export class SecurityModule {}
