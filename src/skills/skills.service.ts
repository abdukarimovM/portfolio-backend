import { Injectable } from '@nestjs/common';
import { CreateSkillsDto } from './dto/create-skills.dto';
import { UpdateSkillsDto } from './dto/update-skills.dto';
import { Skills, SkillsDocument } from './schemas/skills.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel(Skills.name)
    private orderModel: Model<SkillsDocument>,
  ) {}

  async create(createSkillsDto: CreateSkillsDto) {
    const res = await new this.orderModel(createSkillsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateSkillsDto: UpdateSkillsDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateSkillsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
