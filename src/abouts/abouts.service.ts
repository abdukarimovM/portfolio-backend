import { Injectable } from '@nestjs/common';
import { CreateaboutsDto } from './dto/create-abouts.dto';
import { UpdateaboutsDto } from './dto/update-abouts.dto';
import { abouts, aboutsDocument } from './schemas/abouts.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class aboutsService {
  constructor(
    @InjectModel(abouts.name)
    private orderModel: Model<aboutsDocument>,
  ) {}

  async create(createaboutsDto: CreateaboutsDto) {
    const res = await new this.orderModel(createaboutsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateaboutsDto: UpdateaboutsDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateaboutsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
