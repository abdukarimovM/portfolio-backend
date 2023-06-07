import { ApiProperty } from "@nestjs/swagger";

export class UpdateProjectsDto {
  @ApiProperty({ example: 'Clothes website' })
  title?: string;

  @ApiProperty({ example: 'https://abdukarimovms-alibaba-style.netlify.app/' })
  preview?: string;

  @ApiProperty({
    example:
      'https://upcdn.io/FW25bPH/raw/Screenshot%20from%202023-06-06%2021-58-46.png/',
  })
  image?: string;

  @ApiProperty({ example: 'This project for courses add courses and use this' })
  description?: string;

  @ApiProperty({ example: '#html,#css,#javascript,#bootstrap' })
  direction?: string;
  }
  