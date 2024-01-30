import { Module } from '@nestjs/common';
import { CategoriesModule } from './Categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CategoriesModule,
   TypeOrmModule.forRoot({ 
     type: 'postgres',
     host: process.env.DB_HOST,
     port: 5432,
     database: 'Database',
     username: 'useradmin',
     password: 'password',
     entities: [__dirname + '/**/*.entity.ts'],
    synchronize: true,
    autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
