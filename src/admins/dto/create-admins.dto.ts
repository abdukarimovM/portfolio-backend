import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminsDto {
  @ApiProperty({ example: 'Muslimbek' })
  name: string;

  @ApiProperty({ example: '123' })
  password: string;

  @ApiProperty({ example: 'abdukarimov@gmail.com' })
  email: string;

  @ApiProperty({ example: '+998(88)703-80-06' })
  phone_number: string;
  }
  