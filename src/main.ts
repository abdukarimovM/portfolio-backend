import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import cookieParser = require('cookie-parser');
import { allowedOrigins } from './cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.getHttpAdapter().getInstance().disable('etag');
  const PORT = process.env.PORT || process.env.API_PORT || 3001;

  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
  });

  app.use((_req, res, next) => {
    res.setHeader('Cache-Control', 'private, no-store, no-cache, must-revalidate, max-age=0');
    res.setHeader('Vary', 'Origin');
    next();
  });

  app.use(cookieParser());
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('NestJS')
    .setDescription('REST API')
    .setVersion('1.0.0')
    .addTag('NodeJS, NestJS, Postgres, sequalize')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.use((req, res, next) => {
    const startTime = Date.now();
    res.on('finish', () => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      console.log(
        `${req.method} ${req.originalUrl} ${res.statusCode} ${responseTime}ms`,
      );
    });
    next();
  });

  await app.listen(PORT, '0.0.0.0');
}
bootstrap();