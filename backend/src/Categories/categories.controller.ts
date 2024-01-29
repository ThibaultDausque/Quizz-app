import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateCategoriestDto } from './dto/createCategories.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {

	constructor(private categoriesService: CategoriesService) { }

	@Get()
	async findAll() {
		return this.categoriesService.findAll();
	}

	@Get(':id')
	async findOne(@Param() params: { id: string }) {
		return this.categoriesService.findOneById(parseInt(params.id))
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