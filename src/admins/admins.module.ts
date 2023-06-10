import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admins } from './models/admins.model';


@Module({
  imports: [SequelizeModule.forFeature([Admins]), JwtModule],
  controllers: [AdminsController],
  providers: [AdminsService],
})
export class AdminsModule {}