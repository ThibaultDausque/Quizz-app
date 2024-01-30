import { CreateQuestionDto } from '../../Question/dto/createQuestion.dto';

export class CreateCategoriesDto {
	name: string;
	description: string;
	questions: CreateQuestionDto[];
}