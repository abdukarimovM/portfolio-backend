import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSkillsDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'NodeJS' })
  title?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'bx bxl-nodejs' })
  icon?: string;
  }
  