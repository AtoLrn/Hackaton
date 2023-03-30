import { IsEmail, IsNotEmpty } from 'class-validator';
import { Document } from 'src/document/document.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsEmail()
  login: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column({ enum: ['admin', 'user'] })
  type: string;

  @OneToMany(() => Document, (doc: Document) => doc.userId)
  documents: Document[];
}
