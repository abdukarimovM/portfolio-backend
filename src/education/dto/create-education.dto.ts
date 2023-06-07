import { ApiProperty } from '@nestjs/swagger';

export class CreateeducationDto {
  @ApiProperty({ example: "Najot Ta'lim" })
  name: string;

  @ApiProperty({ example: 'https://najottalim.uz/' })
  link: string;

  @ApiProperty({ example: 'https://najottalim.uz/' })
  icon: string;

  @ApiProperty({ example: '2021-2023' })
  date: string;

  @ApiProperty({ example: 'FullStack(NodeJS + VudeJS)'})
  direction: string;
  }
  