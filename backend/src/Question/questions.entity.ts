
import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Categories } from '../Categories/categories.entity';
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

    @ManyToOne(() => Categories, (categories) => categories.questions)
    categories: Categories;
}