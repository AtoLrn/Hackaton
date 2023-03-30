import { Tag } from 'src/tag/tag.entity';
import { User } from 'src/user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => User, (user) => user.id)
  userId: number;

  @Column()
  uploadDate: Date;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];
}
