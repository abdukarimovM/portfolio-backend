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
  Patch,
} from '@nestjs/common';
import { AboutsService } from './abouts.service';
import { CreateaboutsDto } from './dto/create-abouts.dto';
import { UpdateaboutsDto } from './dto/update-abouts.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('abouts')
@Controller('abouts')
export class AboutsController {
  constructor(private readonly aboutsService: AboutsService) {}

  @Post()
  create(@Body() createaboutsDto: CreateaboutsDto) {
    return this.aboutsService.create(createaboutsDto);
  }

  @Get()
  findAll() {
    return this.aboutsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.aboutsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number, 
    @Body() updateAboutsDto: UpdateaboutsDto
    ) {
    return await this.aboutsService.update(+id, updateAboutsDto);
  }

  @Delete(':id')
  async deleter(@Param('id') id: number): Promise<number> {
    return await this.aboutsService.delete(id);
  }
}
