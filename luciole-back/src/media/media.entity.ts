import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Post } from 'src/post/post.entity';

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Post, (post: Post) => post.medias, {onDelete: 'CASCADE'})
  post: number;

  @Column()
  path: string;
}
