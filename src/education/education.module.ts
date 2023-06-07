import { Module } from '@nestjs/common';
import { educationService } from './education.service';
import { educationController } from './education.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { education, educationSchema } from './schemas/education.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: education.name, schema: educationSchema }]),
    JwtModule,
  ],
  controllers: [educationController],
  providers: [educationService],
})
export class educationModule {}