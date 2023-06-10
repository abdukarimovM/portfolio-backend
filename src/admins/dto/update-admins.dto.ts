import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsStrongPassword } from 'class-validator';


export class UpdateAdminsDto {
  @IsOptional()
  @ApiProperty({ example: 'Muslimbek' })
  name?: string;

  @IsOptional()
  @IsStrongPassword()
  @ApiProperty({ example: '123' })
  password?: string;

  @IsOptional()
  @ApiProperty({ example: 'john@gmail.com' })
  @IsEmail()
  email?: string;
  }
  