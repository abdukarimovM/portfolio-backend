import { ApiProperty } from "@nestjs/swagger";

export class CreateaboutsDto {
  @ApiProperty({ example: "I'm Muslimbek" })
  description: string;

  @ApiProperty({ example: "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000"})
  image: string;
  }
  