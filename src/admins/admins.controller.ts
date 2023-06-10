import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminsDto } from './dto/create-admins.dto';
import { UpdateAdminsDto } from './dto/update-admins.dto';
import { LoginAdminDto } from './dto/login-admin.dto';

@Controller('admin')
export class AdminsController {
  constructor(private readonly adminService: AdminsService) {}

  @Post('auth/register')
  async register(@Body() createAdminDto: CreateAdminsDto) {
    return this.adminService.register(createAdminDto);
  }

  @Post('auth/login')
  async login(@Body() loginAdminDto: LoginAdminDto) {
    return this.adminService.login(loginAdminDto);
  }

  @Post()
  async create(@Body() createAdminDto: CreateAdminsDto) {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  async findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.adminService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAdminDto: UpdateAdminsDto,
  ) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return this.adminService.delete(id);
  }
}