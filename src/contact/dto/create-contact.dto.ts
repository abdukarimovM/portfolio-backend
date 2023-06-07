import { ApiProperty } from "@nestjs/swagger";

export class CreatecontactDto {
  @ApiProperty({ example: 'Doe' })
  name: string;
  
  @ApiProperty({ example: 'doe@gmail.com'})
  email: string;

  @ApiProperty({ example: 'NodeJS'})
  title: string;

  @ApiProperty({ example: 'NodeJs nima?'})
  message: string;
  }
  