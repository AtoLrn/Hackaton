import { Media } from 'src/media/media.entity';
import { Tag } from 'src/tag/tag.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'timestamptz' })
  toPublishAt: Date;

  @Column({ enum: ['post', 'link', 'slide', 'video'] })
  type: string;

  @OneToMany(() => Media, (media: Media) => media.post)
  medias: Media[];

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];
}
