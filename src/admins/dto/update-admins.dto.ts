import { ApiProperty } from '@nestjs/swagger';


export class UpdateAdminsDto {
  @ApiProperty({ example: 'Muslimbek' })
  name?: string;

  @ApiProperty({ example: '123' })
  password?: string;

  @ApiProperty({ example: 'john@gmail.com' })
  email?: string;

  hashed_password?: string;

  hashed_refresh_token?: string;
  }
  