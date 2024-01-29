import { Injectable } from '@nestjs/common';
import { Categories } from './categories.entity';
import { Repository } from 'typeorm';
import { CreateCategoriesDto } from './dto/createCategories.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionsService } from 'src/questions/questions.service';
import { UUID } from 'crypto';

@Injectable()
export class CategoriesService {

	constructor(
		@InjectRepository(Categories)
		private categoriesRepository: Repository<Categories>,
		private questionService: QuestionsService,
	) { }

	async create(categories: CreateCategoriesDto) {
		const categoriesCreated = this.categoriesRepository.create()
		categoriesCreated.name = categories.title;
		categoriesCreated.description = categories.description;
		await this.categoriesRepository.insert(categoriesCreated)
		categoriesCreated.questions = await this.questionService.createMany(categories.questions);

		await this.categoriesRepository.save(categoriesCreated)
		return categoriesCreated;
	}

	findAll() {
		return this.categoriesRepository.find();
	}

	findOneById(id: UUID) {
		return this.categoriesRepository.findOne({
			where: { id: id }, relations: {
				questions: true
			}
		})
	}
}