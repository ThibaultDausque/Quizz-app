import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateCategoriesDto } from './dto/createCategories.dto';
import { CategoriesService } from './categories.service';
import type { UUID } from 'crypto';


@Controller('categories')
export class CategoriesController {

	constructor(private categoriesService: CategoriesService) { }

	@Get()
	async findAll() {
		return this.categoriesService.findAll();
	}

	@Get(':id')
	async findOne(@Param() params: { id: UUID}) {
		return this.categoriesService.findOneById(params.id)
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
}