import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateaboutsDto {
  @ApiProperty({
    example: 'Muslimbek Abdukarimov',
  })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    example: 'Full Stack Developer',
  })
  @IsString()
  @IsNotEmpty()
  profession: string;

  @ApiProperty({
    example: 'I am a Full Stack Developer focused on building modern web applications.',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'https://example.com/profile.jpg',
  })
  @IsString()
  @IsNotEmpty()
  image: string;
}