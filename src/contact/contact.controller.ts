import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Patch,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreatecontactDto } from './dto/create-contact.dto';
import { UpdatecontactDto } from './dto/update-contact.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() createcontactDto: CreatecontactDto) {
    return this.contactService.create(createcontactDto);
  }

  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contactService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number, 
    @Body() updatecontactDto: UpdatecontactDto
    ) {
    return this.contactService.update(+id, updatecontactDto);
  }
  
  @Delete(':id')
  delete(@Param('id') id: number): Promise<number> {
    return this.contactService.delete(id);
  }
}
