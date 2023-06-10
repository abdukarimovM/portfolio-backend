import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSocialsDto } from './dto/create-socials.dto';
import { UpdateSocialsDto } from './dto/update-socials.dto';
import { Socials } from './models/socials.model';
import { InjectModel } from '@nestjs/mongoose';
import { v4 as uuid } from 'uuid';

@Injectable()
export class SocialsService {
  constructor(@InjectModel('Socials') private socialsRepository: typeof Socials) {}

  async create(createSocialsDto: CreateSocialsDto) {
    const id = uuid();
    return this.socialsRepository.create({ id, ...createSocialsDto });
  }

  async findAll() {
    return this.socialsRepository.findAll({
      attributes: ['id', 'name', 'icon'],
    });
  }

  async findOne(id: string) {
    const socials = await this.socialsRepository.findOne({
      where: { id },
      attributes: ['id', 'name', 'icon'],
    });
    if (!socials) {
      throw new HttpException('Skill not found', HttpStatus.NOT_FOUND);
    }
    return socials;  }

  async update(id: string, updateSocialsDto: UpdateSocialsDto) {
    await this.findOne(id);
    await this.socialsRepository.update(updateSocialsDto, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: string) {
    const skill = await this.findOne(id);
    await this.socialsRepository.destroy({ where: { id } });
    return skill;  }
}
