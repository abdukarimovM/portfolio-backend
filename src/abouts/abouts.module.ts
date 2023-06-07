import { Module } from '@nestjs/common';
import { aboutsService } from './abouts.service';
import { aboutsController } from './abouts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { abouts, aboutsSchema } from './schemas/abouts.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: abouts.name, schema: aboutsSchema }]),
    JwtModule,
  ],
  controllers: [aboutsController],
  providers: [aboutsService],
})
export class aboutsModule {}