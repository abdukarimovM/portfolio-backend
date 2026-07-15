import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education } from './models/education.model';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuid } from 'uuid';

@Injectable()
export class EducationService {

  constructor(
    @InjectModel(Education)
    private educationRepository: typeof Education
  ) {}

  async create(createEducationDto: CreateEducationDto) {
    const id = uuid();
    return this.educationRepository.create({ id, ...createEducationDto });
  }

  async findAll() {
    return this.educationRepository.findAll({
      attributes: [
        'id',
        'name',
        'link',
        'icon',
        'startYear',
        'endYear',
        'direction'
      ],
    });
  }

  async findOne(id: string) {
    const education = await this.educationRepository.findOne({
      where: { id },
      attributes: [
        'id',
        'name',
        'link',
        'icon',
        'startYear',
        'endYear',
        'direction'
      ],
    });

    if (!education) {
      throw new HttpException('Education not found', HttpStatus.NOT_FOUND);
    }

    return education;
  }

  async update(id: string, updateEducationDto: UpdateEducationDto) {
    await this.findOne(id);

    await this.educationRepository.update(updateEducationDto, {
      where: { id },
    });

    return this.findOne(id);
  }

  async remove(id: string) {
    const education = await this.findOne(id);

    await this.educationRepository.destroy({
      where: { id },
    });

    return education;
  }
}