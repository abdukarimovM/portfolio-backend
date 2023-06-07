import { ApiProperty } from '@nestjs/swagger';

export class CreateSkillsDto {
  @ApiProperty({ example: 'NodeJS' })
  title: string;

  @ApiProperty({ example: 'bx bxl-nodejs' })
  icon: string;

  }
  