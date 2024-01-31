import { Injectable } from '@nestjs/common';
import { Categories } from './categories.entity';
import { Repository } from 'typeorm';
import { CreateCategoriesDto } from './dto/createCategories.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionsService } from '../Question/questions.service';
import { UUID } from 'crypto';
import { CreateQuestionDto } from 'src/Question/dto/createQuestion.dto';

@Injectable()
export class CategoriesService {
	update(category: Categories) {
		return this.categoriesRepository.save(category);
	}

	constructor(
		@InjectRepository(Categories)
		private categoriesRepository: Repository<Categories>,
		private questionService: QuestionsService,
	) { }

	async create(categories: CreateCategoriesDto) {
		const categoriesCreated = this.categoriesRepository.create()
		categoriesCreated.name = categories.name;
		categoriesCreated.description = categories.description;
		await this.categoriesRepository.insert(categoriesCreated)
		categoriesCreated.questions = await this.questionService.createMany(categories.questions);

		await this.categoriesRepository.save(categoriesCreated)
		return categoriesCreated;
	}

	findAll() {
		return this.categoriesRepository.find();
	}
	//find a category by his name
	async findOneByName(name: string) {
		return this.categoriesRepository.findOne({
			where: { name: name }, relations: {
				questions: true
			}
		})
	}

	findOneById(id: UUID) {
		return this.categoriesRepository.findOne({
			where: { id: id }, relations: {
				questions: true
			}
		})
	}
}