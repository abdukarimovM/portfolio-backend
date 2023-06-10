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
// import { JwtAuthGuard } from '../../guards/jwt-auth.guards';

@ApiTags('education')
@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post()
  async create(@Body() createEducationDto: CreateeducationDto) {
    return this.educationService.create(createEducationDto);
  }

  @Get()
  async findAll() {
    return this.educationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.educationService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEducationDto: UpdateeducationDto,
  ) {
    return this.educationService.update(id, updateEducationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.educationService.remove(id);
  }
}
