import { CreateQuestionDto } from '../../Question/dto/createQuestion.dto';

export class CreateCategoriesDto {
	title: string;
	description: string;
	questions: CreateQuestionDto[];
}