import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'eshmat123' })
  username: string;

  @ApiProperty({ example: 'Uzbek' })
  password: string;
}