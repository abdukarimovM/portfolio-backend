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
import { AdminsService } from './admins.service';
import { CreateAdminsDto } from './dto/create-admins.dto';
import { UpdateAdminsDto } from './dto/update-admins.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('Admins')
@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  // @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create admins' })
  @Post()
  create(@Body() createAdminsDto: CreateAdminsDto) {
    return this.adminsService.create(createAdminsDto);
  }

  // @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all admins' })
  @Get()
  findAll(@Query() query: any) {
    return this.adminsService.findAll(query);
  }

  // @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one admins' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminsService.findOne(id);
  }

  // @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update admins by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAdminsDto: UpdateAdminsDto) {
    return this.adminsService.update(id, updateAdminsDto);
  }

  // @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete admins by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminsService.remove(id);
  }
}
