import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/orm.controller';
import { DocumentModule } from './document/document.module';
import { PostModule } from './post/post.module';
import { SecurityModule } from './security/security.module';
import { TagModule } from './tag/tag.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GrouptagModule } from './grouptag/grouptag.module';
import { ConfigModule } from '@nestjs/config';
import { MediaModule } from './media/media.module';

@Module({
  imports: [
    PostModule,
    DatabaseModule,
    TagModule,
    MediaModule,
    SecurityModule,
    DocumentModule,
    GrouptagModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads/',
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
