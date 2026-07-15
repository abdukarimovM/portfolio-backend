import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateEducationDto {

  @ApiProperty({ example: "Najot Ta'lim" })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ example: "https://najottalim.uz" })
  @IsOptional()
  @IsString()
  link?: string;

  @ApiProperty({ example: "/uploads/icon.png" })
  @IsOptional()
  @IsString()
  icon?: string;

  @ApiProperty({ example: "2021" })
  @IsOptional()
  @IsString()
  startYear?: string;

  @ApiProperty({ example: "2024" })
  @IsOptional()
  @IsString()
  endYear?: string;

  @ApiProperty({ example: "FullStack Developer" })
  @IsOptional()
  @IsString()
  direction?: string;
}