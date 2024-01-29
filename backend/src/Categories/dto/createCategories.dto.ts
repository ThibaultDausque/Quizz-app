import { CreateQuestiontDto } from "src/questions/dto/createQuestion.dto";

export class CreateCategoriesDto {
	title: string;
	description: string;
	questions: CreateQuestiontDto[];
}