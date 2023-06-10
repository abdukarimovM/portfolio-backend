import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateaboutsDto {
  @IsOptional()
  @ApiProperty({ example: "I'm Muslimbek" })
  description?: string;

  @IsOptional()
  @ApiProperty({ example: "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000"})
  image?: string;
  }
  