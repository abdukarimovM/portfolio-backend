import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAdminsDto } from './dto/create-admins.dto';
import { UpdateAdminsDto } from './dto/update-admins.dto';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginAdminDto } from './dto/login-admin.dto';
import { Admins } from './models/admins.model';

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel(Admins) private adminRepository: typeof Admins,
    private readonly jwtService: JwtService,
  ) {}

  //////////////////////////////////////////////////////////////////////////////////
  async register(createAdminDto: CreateAdminsDto) {
    const adminByEmail = await this.getAdminByEmail(createAdminDto.email);
    if (adminByEmail) {
      throw new BadRequestException('Email already registered!');
    }
    const hashed_password = await bcrypt.hash(createAdminDto.password, 7);
    const newAdmin = await this.adminRepository.create({
      ...createAdminDto,
      hashed_password,
    });
    const tokens = await this.getTokens(newAdmin);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedAdmin = await this.adminRepository.update(
      {
        hashed_refresh_token,
      },
      {
        where: { id: newAdmin.id },
      },
    );
    const adminData = await this.adminRepository.findOne({
      where: { id: newAdmin.id },
      attributes: ['id', 'email'],
    });
    const response = {
      status: 200,
      data: {
        token: tokens.access_token,
        admin: adminData,
      },
      success: true,
    };
    return response;
  }

  /////////////////////////////////////////////////////////////////////////////
  async login(loginAdminDto: LoginAdminDto) {
    const { username, password } = loginAdminDto;
    const admin = await this.getAdminByEmail(username);
    if (!admin) {
      throw new UnauthorizedException('Email or password is wrong');
    }
    const isMatchPass = await bcrypt.compare(password, admin.hashed_password);
    if (!isMatchPass) {
      throw new UnauthorizedException('Email or password is wrong');
    }
    const tokens = await this.getTokens(admin);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedAdmin = await this.adminRepository.update(
      {
        hashed_refresh_token,
      },
      {
        where: { id: admin.id },
      },
    );
    const adminData = await this.adminRepository.findOne({
      where: { id: admin.id },
      attributes: ['id', 'email'],
    });
    const response = {
      status: 200,
      data: {
        token: tokens.access_token,
        admin: adminData,
      },
      success: true,
    };
    return response;
  }

  //////////////////////////////////////////////////////////////////////////
  async create(createAdminDto: CreateAdminsDto) {
    const res = await this.adminRepository.create({ ...createAdminDto });
    return res;
  }

  async findAll() {
    return await this.adminRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return await this.adminRepository.findByPk(id);
  }

  async update(id: number, updateAdminDto: UpdateAdminsDto) {
    const res = await this.adminRepository.update(updateAdminDto, {
      where: { id },
      returning: true,
    });
    return res;
  }

  async delete(id: number) {
    const result = await this.adminRepository.destroy({ where: { id } });
    return result;
  }

  /////////////////////////////////////////////////////////////////////////////
  async getTokens(admin: Admins) {
    const jwtPayload = {
      id: admin.id,
      email: admin.email,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async verifyAccessToken(authHeader: string) {
    try {
      const access_token = authHeader.split(' ')[1];
      const admin = await this.jwtService.verify(access_token, {
        secret: process.env.ACCESS_TOKEN_KEY,
      });
      return admin;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  async getAdminByEmail(email: string) {
    const admin = await this.adminRepository.findOne({
      where: { email },
    });
    return admin;
  }
}
