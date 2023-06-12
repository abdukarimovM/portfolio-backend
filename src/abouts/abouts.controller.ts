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
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Abouts')
@Controller('abouts')
export class AboutsController {
  constructor(private readonly aboutsService: AboutsService) {}

  @ApiOperation({ summary: 'Create a about' })
  @Post()
  create(@Body() createaboutsDto: CreateaboutsDto) {
    return this.aboutsService.create(createaboutsDto);
  }

  @ApiOperation({ summary: 'Get all abouts' })
  @Get()
  findAll() {
    return this.aboutsService.findAll();
  }

  @ApiOperation({ summary: 'get a about' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.aboutsService.findOne(id);
  }

  @ApiOperation({ summary: 'update a about' })
  @Patch(':id')
  async update(
    @Param('id') id: number, 
    @Body() updateAboutsDto: UpdateaboutsDto
    ) {
    return await this.aboutsService.update(+id, updateAboutsDto);
  }

  @ApiOperation({ summary: 'delete a about' })
  @Delete(':id')
  async deleter(@Param('id') id: number): Promise<number> {
    return await this.aboutsService.delete(id);
  }
}
