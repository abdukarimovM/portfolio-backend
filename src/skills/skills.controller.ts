import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillsDto } from './dto/create-skills.dto';
import { UpdateSkillsDto } from './dto/update-skills.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('Skills')
@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create skills' })
  @Post()
  create(@Body() createSkillsDto: CreateSkillsDto) {
    return this.skillsService.create(createSkillsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all skills' })
  @Get()
  findAll(@Query() query: any) {
    return this.skillsService.findAll();
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one skills' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillsService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update skills by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateSkillsDto: UpdateSkillsDto) {
    return this.skillsService.update(id, updateSkillsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete skills by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsService.remove(id);
  }
}
