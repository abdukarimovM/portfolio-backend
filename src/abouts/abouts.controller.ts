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
import { aboutsService } from './abouts.service';
import { CreateaboutsDto } from './dto/create-abouts.dto';
import { UpdateaboutsDto } from './dto/update-abouts.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('abouts')
@Controller('abouts')
export class aboutsController {
  constructor(private readonly aboutsService: aboutsService) {}

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create abouts' })
  @Post()
  create(@Body() createaboutsDto: CreateaboutsDto) {
    return this.aboutsService.create(createaboutsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all abouts' })
  @Get()
  findAll(@Query() query: any) {
    return this.aboutsService.findAll(query);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one abouts' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutsService.findOne(id);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update abouts by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateaboutsDto: UpdateaboutsDto) {
    return this.aboutsService.update(id, updateaboutsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete abouts by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aboutsService.remove(id);
  }
}
