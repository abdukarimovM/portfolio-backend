import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSkillsDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'NodeJS' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'bx bxl-nodejs' })
  icon: string;

}
  