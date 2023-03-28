import { Media } from 'src/media/media.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ enum: ['post', 'link', 'slide', 'video'] })
  type: string;

  @OneToMany(() => Media, (media: Media) => media.postId)
  medias: Media[];
}
