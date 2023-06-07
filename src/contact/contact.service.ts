import { Injectable } from '@nestjs/common';
import { CreatecontactDto } from './dto/create-contact.dto';
import { UpdatecontactDto } from './dto/update-contact.dto';
import { contact, contactDocument } from './schemas/contact.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class contactService {
  constructor(
    @InjectModel(contact.name)
    private orderModel: Model<contactDocument>,
  ) {}

  async create(createcontactDto: CreatecontactDto) {
    const res = await new this.orderModel(createcontactDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updatecontactDto: UpdatecontactDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updatecontactDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
