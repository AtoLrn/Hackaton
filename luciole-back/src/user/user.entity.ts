import { IsEmail, IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
