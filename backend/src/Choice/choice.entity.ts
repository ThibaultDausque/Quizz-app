import { UUID } from "crypto";
import { Question } from "src/Question/questions.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()

export class Choice {
    @PrimaryGeneratedColumn('uuid')
    id: UUID;

    @Column({ length: 550 })
    choice1: string;

    @Column({ length: 550 })
    choice2: string;

    @Column({ length: 550 })
    choice3: string;
  
    @ManyToOne(() => Question, (question) => question.choices)
    question: Question;

}