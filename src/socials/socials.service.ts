import { Injectable } from '@nestjs/common';
import { CreateSocialsDto } from './dto/create-socials.dto';
import { UpdateSocialsDto } from './dto/update-socials.dto';
import { Socials, SocialsDocument } from './schemas/socials.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SocialsService {
  constructor(
    @InjectModel(Socials.name)
    private orderModel: Model<SocialsDocument>,
  ) {}

  async create(createSocialsDto: CreateSocialsDto) {
    const res = await new this.orderModel(createSocialsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateSocialsDto: UpdateSocialsDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateSocialsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
