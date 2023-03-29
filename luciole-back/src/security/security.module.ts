import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { TagController } from './security.controller';
import { SecurityService } from './security.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [TagController],
  providers: [SecurityService],
  exports: [TypeOrmModule],
})
export class SecurityModule {}
