import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  startDate: Date;

  @Column({ default: 1 })
  priority: number;

  @Column({ nullable: true })
  endDate: Date;

  @Column('int', { array: true, nullable: true })
  weeks: number[];
}
