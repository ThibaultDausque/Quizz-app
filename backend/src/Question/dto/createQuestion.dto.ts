import { CreateChoiceDto } from "src/Choice/dto/createChoice.dto";

export class CreateQuestionDto {
    question: string;
    correctAnswer: string;
    choice: CreateChoiceDto
}