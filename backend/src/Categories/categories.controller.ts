import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateCategoriesDto } from './dto/createCategories.dto';
import { CategoriesService } from './categories.service';
import type { UUID } from 'crypto';
import { CreateQuestionDto } from 'src/Question/dto/createQuestion.dto';
import { Question } from 'src/Question/questions.entity';
import { QuestionsService } from 'src/Question/questions.service';


@Controller('categories')
export class CategoriesController {
	questionService: any;

	constructor(private categoriesService: CategoriesService,
		        private  questionsService:  QuestionsService) { }

	@Get()
	async findAll() {
		return this.categoriesService.findAll();
	}

	@Get(':id')
	async findOne(@Param() params: { id: UUID}) {
		return this.categoriesService.findOneById(params.id)
	}

	@Get(':name')
	async findOneByName(@Param() params: { name: string }) {
		return this.categoriesService.findOneByName(params.name)
	}

	@Post()
	async create(@Body() categories: CreateCategoriesDto) {
		try {
			const categoriesCreated = await this.categoriesService.create(categories);
			return categoriesCreated;
		} catch (error) {
			console.error(error)
			throw error;
		}

	}
@Post(':id/questions')
async addQuestionToCategory(@Param('id') categoryId: UUID, @Body() question: CreateQuestionDto) {
	try {
		const questionCreated = await this.questionsService.createone(question);
		const category = await this.categoriesService.findOneById(categoryId);
		category.questions.push(questionCreated);
		await this.categoriesService.update(category);
		return questionCreated;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
}