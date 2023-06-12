import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateeducationDto } from './dto/create-education.dto';
import { UpdateeducationDto } from './dto/update-education.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Education')
@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @ApiOperation({ summary: 'create a education' })
  @Post()
  async create(@Body() createEducationDto: CreateeducationDto) {
    return this.educationService.create(createEducationDto);
  }

  @ApiOperation({ summary: 'get all education' })
  @Get()
  async findAll() {
    return this.educationService.findAll();
  }

  @ApiOperation({ summary: 'get a education' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.educationService.findOne(id);
  }

  @ApiOperation({ summary: 'update a education' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEducationDto: UpdateeducationDto,
  ) {
    return this.educationService.update(id, updateEducationDto);
  }

  @ApiOperation({ summary: 'delete a education' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.educationService.remove(id);
  }
}
