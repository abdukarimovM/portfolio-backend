import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateProjectsDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Clothes website' })
  title?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'https://abdukarimovms-alibaba-style.netlify.app/' })
  preview?: string;
  
  @IsOptional()
  @IsString()
  @ApiProperty({
    example:
      'https://upcdn.io/FW25bPH/raw/Screenshot%20from%202023-06-06%2021-58-46.png/',
  })
  image?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'This project for courses add courses and use this' })
  description?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: '#html,#css,#javascript,#bootstrap' })
  direction?: string;
  }
  