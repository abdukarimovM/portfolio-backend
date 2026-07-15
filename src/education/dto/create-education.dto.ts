import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEducationDto {

  @ApiProperty({ example: "Najot Ta'lim" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "https://najottalim.uz" })
  @IsString()
  @IsNotEmpty()
  link: string;

  @ApiProperty({ example: "/uploads/icon.png" })
  @IsString()
  @IsNotEmpty()
  icon: string;

  @ApiProperty({ example: "2021" })
  @IsString()
  @IsNotEmpty()
  startYear: string;

  @ApiProperty({ example: "2024" })
  @IsString()
  @IsNotEmpty()
  endYear: string;

  @ApiProperty({ example: "FullStack Developer" })
  @IsString()
  @IsNotEmpty()
  direction: string;
}