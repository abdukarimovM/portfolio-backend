import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Skills, SkillsSchema } from './schemas/skills.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Skills.name, schema: SkillsSchema }]),
    JwtModule,
  ],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class SkillsModule {}