import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'todos' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: 'タイトル',
    length: 255,
  })
  title: string;

  @Column({
    comment: '説明',
    length: 255,
  })
  description: string;
}
