import { Injectable } from '@nestjs/common';
import { CreateeducationDto } from './dto/create-education.dto';
import { UpdateeducationDto } from './dto/update-education.dto';
import { education, educationDocument } from './schemas/education.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class educationService {
  constructor(
    @InjectModel(education.name)
    private orderModel: Model<educationDocument>,
  ) {}

  async create(createeducationDto: CreateeducationDto) {
    const res = await new this.orderModel(createeducationDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateeducationDto: UpdateeducationDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateeducationDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
