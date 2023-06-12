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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @ApiOperation({ summary: 'create a contact' })
  @Post()
  create(@Body() createcontactDto: CreatecontactDto) {
    return this.contactService.create(createcontactDto);
  }

  @ApiOperation({ summary: 'get all contact' })
  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @ApiOperation({ summary: 'get a contact' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contactService.findOne(+id);
  }

  @ApiOperation({ summary: 'update a contact' })
  @Patch(':id')
  update(
    @Param('id') id: number, 
    @Body() updatecontactDto: UpdatecontactDto
    ) {
    return this.contactService.update(+id, updatecontactDto);
  }
  
  @ApiOperation({ summary: 'delete a contact' })
  @Delete(':id')
  delete(@Param('id') id: number): Promise<number> {
    return this.contactService.delete(id);
  }
}
