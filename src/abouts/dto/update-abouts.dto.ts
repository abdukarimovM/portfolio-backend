import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateaboutsDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Muslimbek Abdukarimov' })
  fullName?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Full Stack Developer' })
  profession?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example:
      'I am a Full Stack Developer focused on building modern web applications.',
  })
  description?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example:
      'https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000',
  })
  image?: string;
}