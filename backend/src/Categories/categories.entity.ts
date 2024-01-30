import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Question } from 'src/Question/questions.entity';
import { UUID } from 'crypto';

@Entity()
export class Categories {
	@PrimaryGeneratedColumn('uuid')
	id: UUID;

	@Column({ length: 500 })
	name: string;

	@Column('text')
	description: string;

	@OneToMany(() => Question, (questions) => questions.categories)
	questions: Question[]

}