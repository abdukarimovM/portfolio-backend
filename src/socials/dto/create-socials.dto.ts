import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSocialsDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Github' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'https://github.com/abdukarimovM' })
  link: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'bx bxl-github' })
  icon: string;
  }
  