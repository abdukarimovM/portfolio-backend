import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { contactService } from './contact.service';
import { CreatecontactDto } from './dto/create-contact.dto';
import { UpdatecontactDto } from './dto/update-contact.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('contact')
@Controller('contact')
export class contactController {
  constructor(private readonly contactService: contactService) {}

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create contact' })
  @Post()
  create(@Body() createcontactDto: CreatecontactDto) {
    return this.contactService.create(createcontactDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all contact' })
  @Get()
  findAll(@Query() query: any) {
    return this.contactService.findAll(query);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one contact' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update contact by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updatecontactDto: UpdatecontactDto) {
    return this.contactService.update(id, updatecontactDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete contact by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }
}
