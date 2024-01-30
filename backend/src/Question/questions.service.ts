import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './questions.entity';
import { CreateQuestionDto } from './dto/createQuestion.dto';

// 1. Add the @Injectable() decorator to the QuestionsService class:
@Injectable()
export class QuestionsService {
     constructor(
            @InjectRepository(Question)
            private questionsRepository: Repository<Question>,
        ) {}
 // 2. Add the createQuestion method to the QuestionsService class:
     async createMany (questions: CreateQuestionDto[]) {
        // 3. Create a questionsCreated variable and map over the questions array:
        const questionsCreated = questions.map((question) => {
            // 4. Create a questionCreated variable and use the create() method to create a new Question object:
            const questionCreated = this.questionsRepository.create();
            // 5. Set the questionCreated.question property to the question.question value:
            questionCreated.question = question.question;
            // 5. Set the questionCreated.answers property to the question.answers value:
            questionCreated.correctAnswer = question.correctAnswer;

            return questionCreated;
        });
        // 6. Use the insert() method to insert the questionsCreated array into the database:
        await this.questionsRepository.insert(questionsCreated);
        return questionsCreated;
    }
}