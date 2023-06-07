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
import { educationService } from './education.service';
import { CreateeducationDto } from './dto/create-education.dto';
import { UpdateeducationDto } from './dto/update-education.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('education')
@Controller('education')
export class educationController {
  constructor(private readonly educationService: educationService) {}

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create education' })
  @Post()
  create(@Body() createeducationDto: CreateeducationDto) {
    return this.educationService.create(createeducationDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all education' })
  @Get()
  findAll(@Query() query: any) {
    return this.educationService.findAll(query);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one education' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.educationService.findOne(id);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update education by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateeducationDto: UpdateeducationDto) {
    return this.educationService.update(id, updateeducationDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete education by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.educationService.remove(id);
  }
}
