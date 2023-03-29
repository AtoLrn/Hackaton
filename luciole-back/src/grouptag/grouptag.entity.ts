import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Tag } from 'src/tag/tag.entity'

@Entity()
export class Grouptag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[]
}
