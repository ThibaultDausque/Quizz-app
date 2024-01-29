import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { Categories } from './categories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionsModule } from 'src/questions/questions.modules';
import { CategoriesService } from './categories.service';

@Module({
	imports: [
		TypeOrmModule.forFeature([Categories]),
		QuestionsModule,
	],
	controllers: [CategoriesController],
	providers: [CategoriesService],
})
export class CategoriesModule { }