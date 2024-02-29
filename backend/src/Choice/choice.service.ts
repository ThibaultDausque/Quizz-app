import { Injectable } from '@nestjs/common';
import { Choice } from './choice.entity';
import { CreateChoiceDto } from './dto/createChoice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// 1. Add the @Injectable() decorator to the ChoiceService class:

@Injectable() 
export class ChoiceService { 
    constructor(
        // 2. Inject the Choice repository into the ChoiceService class:
        @InjectRepository(Choice)
        private choiceRepository: Repository<Choice>,
    ) {}    
    // 3. Create a createChoice() method that takes a createChoiceDto object as an argument:
       
    async createChoice(createChoiceDto: CreateChoiceDto): Promise<Choice> {
        // 4. Create a new choice object and assign the properties of the createChoiceDto object to it:
        const choice = new Choice();
        choice.choice1 = createChoiceDto.choice[0].choice1;
        choice.choice2 = createChoiceDto.choice[0].choice2;
        choice.choice3 = createChoiceDto.choice[0].choice3;
        // 5. Save the new choice object to the database:
        return await this.choiceRepository.save(choice);
    }
}

