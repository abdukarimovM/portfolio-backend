import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatecontactDto } from './dto/create-contact.dto';
import { UpdatecontactDto } from './dto/update-contact.dto';
import { Contact } from './models/contact.model';
import { InjectModel } from '@nestjs/mongoose';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ContactService {
  constructor(@InjectModel(Contact) private contactRepository: typeof Contact) {}

  async create(createcontactDto: CreatecontactDto) {
    return this.contactRepository.create({ ...CreatecontactDto });
  }

  async findAll() {
    return await this.contactRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return await this.contactRepository.findByPk(id);
  }

  async update(id: number, updatecontactDto: UpdatecontactDto) {
    return await this.contactRepository.update(updatecontactDto, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number): Promise<number> {
    const result = await this.contactRepository.destroy({ where: { id } });
    return result;
  }
}
