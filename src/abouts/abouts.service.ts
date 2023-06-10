import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateaboutsDto } from './dto/create-abouts.dto';
import { UpdateaboutsDto } from './dto/update-abouts.dto';
import { Abouts } from './models/abouts.model';
import { InjectModel } from '@nestjs/mongoose';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AboutsService {
  constructor(@InjectModel(Abouts)
  private aboutsRepository: typeof Abouts) { }

  async create(createAboutsDto: CreateaboutsDto) {
    return this.aboutsRepository.create({...createAboutsDto });
  }

  async findAll() {
    return await this.aboutsRepository.findAll({ include: { all: true } });

  }

  async findOne(id: number) {
    return await this.aboutsRepository.findByPk(id);

  }

  async update(id: number, updateAboutsDto: UpdateaboutsDto) {
    return await this.aboutsRepository.update(updateAboutsDto, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number) {
    const result = await this.aboutsRepository.destroy({ where: { id } });
    return result;
  }
}
