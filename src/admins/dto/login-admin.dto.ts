import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginAdminDto {
  @ApiProperty({ example: 'eshmat123' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'Uzbek' })
  @IsNotEmpty()
  @IsString()
  password: string;
}