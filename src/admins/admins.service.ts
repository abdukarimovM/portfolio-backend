import { Injectable } from '@nestjs/common';
import { CreateAdminsDto } from './dto/create-admins.dto';
import { UpdateAdminsDto } from './dto/update-admins.dto';
import { Admins, AdminsDocument } from './schemas/admins.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel(Admins.name)
    private orderModel: Model<AdminsDocument>,
  ) {}

  async create(createAdminsDto: CreateAdminsDto) {
    const password = await bcrypt.hash(createAdminsDto.password, 7);
    const res = await new this.orderModel({
      ...createAdminsDto,
      password,
    }).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async findOneLogin(name: string) {
    return this.orderModel.findOne({ name }).exec();
  }

  async update(id: string, updateAdminsDto: UpdateAdminsDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateAdminsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
