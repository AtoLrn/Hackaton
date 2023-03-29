import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagModule } from 'src/tag/tag.module';
import { TagController } from './document.controller';
import { Document } from './document.entity';
import { DocumentService } from './document.service';

@Module({
  imports: [TypeOrmModule.forFeature([Document]), TagModule],
  controllers: [TagController],
  providers: [DocumentService],
  exports: [TypeOrmModule],
})
export class DocumentModule {}
