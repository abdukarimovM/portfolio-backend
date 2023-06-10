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
import { SocialsService } from './socials.service';
import { CreateSocialsDto } from './dto/create-socials.dto';
import { UpdateSocialsDto } from './dto/update-socials.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('Socials')
@Controller('socials')
export class SocialsController {
  constructor(private readonly socialsService: SocialsService) {}

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create socials' })
  @Post()
  create(@Body() createSocialsDto: CreateSocialsDto) {
    return this.socialsService.create(createSocialsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all socials' })
  @Get()
  findAll() {
    return this.socialsService.findAll();
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one socials' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialsService.findOne(id);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update socials by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateSocialsDto: UpdateSocialsDto) {
    return this.socialsService.update(id, updateSocialsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete socials by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialsService.remove(id);
  }
}
