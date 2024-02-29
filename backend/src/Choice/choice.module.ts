import {Module} from '@nestjs/common';
import {ChoiceService} from './choice.service';
import  {Choice} from './choice.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
 
//create a ChoiceModule class and import the TypeOrmModule.forFeature() method.
@Module({
    // 1. Import the TypeOrmModule.forFeature() method and pass in the Choice entity:
    imports: [TypeOrmModule.forFeature([Choice])],
    // 2. Provide the ChoiceService class:
    providers: [ChoiceService],
    // 3. Export the ChoiceService class:
    exports: [ChoiceService],
})
// 4. Export the ChoiceModule class:
export class ChoiceModule {}