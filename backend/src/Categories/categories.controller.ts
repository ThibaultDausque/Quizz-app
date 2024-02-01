import { Body, Controller, Get, Post, Param, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCategoriesDto } from './dto/createCategories.dto';
import { CategoriesService } from './categories.service';
import type { UUID } from 'crypto';
import { CreateQuestionDto } from 'src/Question/dto/createQuestion.dto';
import { QuestionsService } from 'src/Question/questions.service';


@Controller('categories')
export class CategoriesController {
	questionService: any;

	constructor(private categoriesService: CategoriesService,
		private questionsService: QuestionsService) { }
	//get all categories
	@Get()
	async findAll() {
		return this.categoriesService.findAll();
	}
	//get a categories by id
	@Get(':id')
	async findOne(@Param() params: { id: UUID }) {
		return this.categoriesService.findOneById(params.id)
	}
	//get a categories by name
	@Get('name/:name')
	async findOneByName(@Param('name') name: string) {
		const category = await this.categoriesService.findOneByName(name);
		if (!category) {
			// If category doesn't exist throw an error with status 400
			throw new HttpException(`Category ${name} doesn't exist`, HttpStatus.BAD_REQUEST);
		} else {
			return category;
		}
	}
	//get all questions from a category by name
	@Get('name/:name/questions')
	async findQuestionsByCategoryName(@Param('name') name: string) {
		try {
			const category = await this.categoriesService.findOneByName(name);
			if(!category){
				throw new HttpException(`Category ${name} doesn't exist`, HttpStatus.BAD_REQUEST);
			} else {
				return category.questions;
			}
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
	//get a number of questions from a category by name
	@Get('name/:name/questions/:number')
	async findQuestionsByCategoryNameAndNumber(@Param('name') name: string, @Param('number') number: number) {
		try {
			const category = await this.categoriesService.findOneByName(name);
			if(!category){
				throw new HttpException(`Category ${name} doesn't exist`, HttpStatus.BAD_REQUEST);
			} else {
			return category.questions.slice(0, number);
		} }catch (error) {
			console.error(error);
			throw error;
		}
	}
	//get a number of random questions from a category by name
	@Get('name/:name/questions/random/:number')
	async findRandomQuestionsByCategoryNameAndNumber(@Param('name') name: string, @Param('number') number: number) {
		try {
			const category = await this.categoriesService.findOneByName(name);
			if(!category){
				throw new HttpException(`Category ${name} doesn't exist`, HttpStatus.BAD_REQUEST);
			} else {
			const questions = category.questions;
			const randomQuestions = [];
			for (let i = 0; i < number; i++) {
				const randomIndex = Math.floor(Math.random() * questions.length);
				randomQuestions.push(questions[randomIndex]);
				questions.splice(randomIndex, 1);
			}
			return randomQuestions;
		}} catch (error) {
			console.error(error);
			throw error;
		}
	}
	//get all questions from a category
	@Get(':id/questions')
	async findAllQuestions(@Param('id') categoryId: UUID) {
		try {
			const category = await this.categoriesService.findOneById(categoryId);
			return category.questions;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
	//get a number of questions from a category
	@Get(':id/questions/:number')
	async findQuestionsByNumber(@Param('id') categoryId: UUID, @Param('number') number: number) {
		try {
			const category = await this.categoriesService.findOneById(categoryId);
			return category.questions.slice(0, number);
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
	//get a number of  random questions from a category
	@Get(':id/questions/random/:number')
	async findRandomQuestionsByNumber(@Param('id') categoryId: UUID, @Param('number') number: number) {
		try {
			const category = await this.categoriesService.findOneById(categoryId);
			const questions = category.questions;
			const randomQuestions = [];
			for (let i = 0; i < number; i++) {
				const randomIndex = Math.floor(Math.random() * questions.length);
				randomQuestions.push(questions[randomIndex]);
				questions.splice(randomIndex, 1);
			}
			return randomQuestions;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
	//create a category and add questions to it
	@Post()
	async create(@Body() categories: CreateCategoriesDto) {
		try {
			// Check if category already exists by his name before creating it
			const categoriesExist = await this.categoriesService.findOneByName(categories.name);
			const checkquestionsinDB = await this.questionsService.findMany(categories.questions);
			// join the questions in the array to a string for display it in the error message
			const questionTexts = checkquestionsinDB.map(q => q.question).join(', ');
			if (checkquestionsinDB.length > 0 && categoriesExist) {
				throw new HttpException('Category ' + categories.name + ' and Questions ' + questionTexts + ' already exist', HttpStatus.BAD_REQUEST);
			} else if (checkquestionsinDB.length > 0) {
				// If questions already exists throw an error with status 400
				throw new HttpException('Questions ' + questionTexts + 'already exist', HttpStatus.BAD_REQUEST);
			} else if (categoriesExist) {
				// If category already exists throw an error with status 400
				throw new HttpException('Category ' + categories.name + ' already exists', HttpStatus.BAD_REQUEST);
			} else {
				const categoriesCreated = await this.categoriesService.create(categories);
				return categoriesCreated;
			}
		} catch (error) {
			console.error(error)
			throw error;
		}

	}
	//add a question to a category
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
	// add a question to a category by name
	@Post('name/:name/questions')
	async addQuestionToCategoryByName(@Param('name') name: string, @Body() question: CreateQuestionDto) {
		try {
			const QuestionCreated = await this.questionsService.createone(question);
			const category = await this.categoriesService.findOneByName(name);
			if (!category) {
				// If category doesn't exist throw an error with status 400
				throw new HttpException('Category ' + name + ' doesn\'t exist', HttpStatus.BAD_REQUEST);
			} else {
				// Check if question already exists by his name  in category before adding it 
				const questionExists = category.questions.find((q) => q.question === QuestionCreated.question);
				if (questionExists) {
					// If question already exists in category throw an error with status 400
					throw new HttpException('Question ' + question.question + ' already exists in this category', HttpStatus.BAD_REQUEST);
				} else {
					category.questions.push(QuestionCreated);
					await this.categoriesService.update(category);
					return QuestionCreated;
				}
			}
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}