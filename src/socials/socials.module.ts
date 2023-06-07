import { Module } from '@nestjs/common';
import { SocialsService } from './socials.service';
import { SocialsController } from './socials.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Socials, SocialsSchema } from './schemas/socials.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Socials.name, schema: SocialsSchema }]),
    JwtModule,
  ],
  controllers: [SocialsController],
  providers: [SocialsService],
})
export class SocialsModule {}