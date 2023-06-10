import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSocialsDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Github' })
  name?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'https://github.com/abdukarimovM' })
  link?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'bx bxl-github' })
  icon?: string;
  }
  