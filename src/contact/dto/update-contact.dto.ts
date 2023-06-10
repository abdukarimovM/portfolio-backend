import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";

export class UpdatecontactDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Doe' })
  name?: string;
  
  @IsOptional()
  @IsEmail()
  @ApiProperty({ example: 'doe@gmail.com'})
  email?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'NodeJS'})
  title?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'NodeJs nima?'})
  message?: string;
}
  