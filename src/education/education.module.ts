import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { Education } from './models/education.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Education]), JwtModule],
  controllers: [EducationController],
  providers: [EducationService],
})
export class EducationModule {}