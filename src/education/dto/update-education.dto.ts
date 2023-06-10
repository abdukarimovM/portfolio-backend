import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateeducationDto {
  @ApiProperty({ example: "Najot Ta'lim" })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ example: 'https://najottalim.uz/' })
  @IsOptional()
  @IsString()
  link?: string;

  @ApiProperty({ example: 'https://najottalim.uz/' })
  @IsOptional()
  @IsString()
  icon?: string;

  @ApiProperty({ example: '2021-2023' })
  @IsOptional()
  @IsDateString()
  date?: string;

  @ApiProperty({ example: 'FullStack(NodeJS + VudeJS)'})
  @IsOptional()  
  @IsString()
  direction?: string;
  }
  