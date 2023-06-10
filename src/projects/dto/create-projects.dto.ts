import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateProjectsDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Clothes website' })
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'https://abdukarimovms-alibaba-style.netlify.app/' })
  preview: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example:
      'https://upcdn.io/FW25bPH/raw/Screenshot%20from%202023-06-06%2021-58-46.png/',
  })
  image: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'This project for courses add courses and use this' })
  description: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '#html,#css,#javascript,#bootstrap' })
  direction: string;
  }
  