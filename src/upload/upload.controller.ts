import {
  Controller,
  BadRequestException,
  Post,
  ServiceUnavailableException,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { extname } from 'path';
import { randomUUID } from 'crypto';
import { put } from '@vercel/blob';
import { ApiConsumes, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('upload')
@Controller('upload')
export class UploadController {
  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      limits: { fileSize: 4 * 1024 * 1024 },
      fileFilter: (_req, file, callback) => {
        if (!['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif'].includes(file.mimetype)) {
          callback(new BadRequestException('Only JPEG, PNG, WebP, GIF, and AVIF images are allowed'), false);
          return;
        }
        callback(null, true);
      },
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Select an image to upload');
    }

    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      throw new ServiceUnavailableException('Image storage is not configured. Add BLOB_READ_WRITE_TOKEN to the Vercel backend environment variables.');
    }

    const extension = extname(file.originalname).toLowerCase();
    const blob = await put(
      `portfolio/${randomUUID()}${extension}`,
      file.buffer,
      {
        access: 'public',
        contentType: file.mimetype,
        token: process.env.BLOB_READ_WRITE_TOKEN,
      },
    );

    return {
      filename: blob.pathname,
      url: blob.url,
    };
  }
}