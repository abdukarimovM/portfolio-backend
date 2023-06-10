import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateaboutsDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: "I'm Muslimbek" })
  description: string;

  @IsNotEmpty()
  @ApiProperty({ example: "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000"})
  image: string;
  }
  