import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CreateAdminsDto {
  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '123' })
  @IsStrongPassword()
  password: string;

  @ApiProperty({ example: 'abdukarimov@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  }
  