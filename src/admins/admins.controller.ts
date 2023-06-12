import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminsDto } from './dto/create-admins.dto';
import { UpdateAdminsDto } from './dto/update-admins.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { AdminAuthGuard } from '../guards/admin.guards';


@ApiTags('Admin')
@Controller('admin')
export class AdminsController {
  constructor(private readonly adminService: AdminsService) {}

  
  @ApiOperation({ summary: 'Register Admin' })
  @Post('auth/register')
  async register(@Body() createAdminDto: CreateAdminsDto) {
    return this.adminService.register(createAdminDto);
  }

  @ApiOperation({ summary: 'Login Admin' })
  @Post('auth/login')
  async login(@Body() loginAdminDto: LoginAdminDto) {
    return this.adminService.login(loginAdminDto);
  } 

  @ApiOperation({ summary: 'Create a Admin' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Post('/create')
  async create(@Body() createAdminDto: CreateAdminsDto) {
    return this.adminService.create(createAdminDto);
  }

  @ApiOperation({ summary: 'Get all Admin' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Get()
  async findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({ summary: 'Get Admin' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.adminService.findOne(id);
  }

  @ApiOperation({ summary: 'Update Admin' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAdminDto: UpdateAdminsDto,
  ) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiOperation({ summary: 'Delete Admin' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return this.adminService.delete(id);
  }
}