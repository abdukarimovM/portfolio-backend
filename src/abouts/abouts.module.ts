import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Abouts } from './models/abouts.model';
import { AboutsController } from './abouts.controller';
import { AboutsService } from './abouts.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Abouts]), JwtModule],
  controllers: [AboutsController],
  providers: [AboutsService],
})
export class AboutsModule {}