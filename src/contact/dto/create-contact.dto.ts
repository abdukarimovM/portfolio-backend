import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreatecontactDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Doe' })
  name: string;
  
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'doe@gmail.com'})
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'NodeJS'})
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'NodeJs nima?'})
  message: string;
  }
  
  