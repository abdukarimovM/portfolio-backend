import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateeducationDto {
  @ApiProperty({ example: "Najot Ta'lim" })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'https://najottalim.uz/' })
  @IsString()
  @IsNotEmpty()
  link: string;


  @ApiProperty({ example: 'https://najottalim.uz/' })
  @IsString()
  @IsNotEmpty()
  icon: string;

  @ApiProperty({ example: '2021-2023' })
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @ApiProperty({ example: 'FullStack(NodeJS + VudeJS)'})
  @IsString()
  @IsNotEmpty()
  direction: string;

}
  