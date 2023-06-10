import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSkillsDto } from './dto/create-skills.dto';
import { UpdateSkillsDto } from './dto/update-skills.dto';
import { Skill } from './models/skills.model';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuid } from 'uuid';

@Injectable()
export class SkillsService {
  constructor(@InjectModel(Skill) private skillRepository: typeof Skill) {}

  async create(createSkillsDto: CreateSkillsDto) {
    const id = uuid();
    return this.skillRepository.create({ id, ...createSkillsDto });
  }

  async findAll() {
    return this.skillRepository.findAll({
      attributes: ['id', 'name', 'icon'],
    });
  }

  async findOne(id: string) {
    const skill = await this.skillRepository.findOne({
      where: { id },
      attributes: ['id', 'name', 'icon'],
    });
    if (!skill) {
      throw new HttpException('Skill not found', HttpStatus.NOT_FOUND);
    }
    return skill;
  }

  async update(id: string, updateSkillsDto: UpdateSkillsDto) {
    await this.findOne(id);
    await this.skillRepository.update(updateSkillsDto, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: string) {
    const skill = await this.findOne(id);
    await this.skillRepository.destroy({ where: { id } });
    return skill;
  }
}
