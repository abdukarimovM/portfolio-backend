import { ApiProperty } from '@nestjs/swagger';

export class UpdateSkillsDto {
  @ApiProperty({ example: 'NodeJS' })
  title?: string;

  @ApiProperty({ example: 'bx bxl-nodejs' })
  icon?: string;
  }
  