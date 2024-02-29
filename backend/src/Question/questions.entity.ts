
import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Categories } from '../Categories/categories.entity';
import { Choice } from 'src/Choice/choice.entity';
// 1. Import the @Entity() decorator and the @Column() decorator from the TypeORM package:
@Entity()
// 2. Create a Question class and add the @PrimaryGeneratedColumn() decorator to the id property:
export class Question {
    // 3. Add the @Column() decorator to the question and correctAnswer properties:
    @PrimaryGeneratedColumn('uuid')
    id: UUID;
    // 4. Add the @Column() decorator to the question and correctAnswer properties:
    @Column({ length: 550 })
    question: string;
    // 5. Add the @Column() decorator to the question and correctAnswer properties:
    @Column({ length: 550 })
    correctAnswer: string;
    // 6. Add the @OneToMany() decorator to the choices property and pass in a function that returns the Choice entity:
    @OneToMany(() => Choice, (choice) => choice.question)
    choices: Choice[];
    // 7. Add the @ManyToOne() decorator to the categories property and pass in a function that returns the Categories entity:
    @ManyToOne(() => Categories, (categories) => categories.questions)
    categories: Categories;
}