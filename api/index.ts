import 'pg';
import 'pg-hstore';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

const server = express();
let cachedServer: any;

export const createServer = async () => {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

    app.enableCors({
        origin: [
            'https://admin.abdukarimovm.uz',
            'https://abdukarimovm.uz',
            'http://localhost:3000',
            'http://localhost:3001',
        ],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    });

    app.use(cookieParser());
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
    return server;
};

export default async function handler(req: any, res: any) {
    if (!cachedServer) {
        cachedServer = await createServer();
    }
    return cachedServer(req, res);
}