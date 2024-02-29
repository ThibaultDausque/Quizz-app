import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './questions.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChoiceModule } from 'src/Choice/choice.module';

//create a QuestionsModule class and import the TypeOrmModule.forFeature() method.
@Module({
        // 1. Import the TypeOrmModule.forFeature() method and pass in the Question entity:
        imports: [TypeOrmModule.forFeature([Question]),
                ChoiceModule],
        // 2. Provide the QuestionsService class:
        providers: [QuestionsService],
        // 3. Export the QuestionsService class:
        exports: [QuestionsService],
})
// 4. Export the QuestionsModule class:
export class QuestionsModule { }
