import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/orm.controller';
import { PostModule } from './post/app.module';

@Module({
  imports: [PostModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
