import 'pg';
import 'pg-hstore';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { ValidationPipe } from '@nestjs/common';
import cookieParser = require('cookie-parser');

const server = express();
let cachedServer: any;

export const createServer = async () => {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

    app.enableCors({
        origin: true,
        credentials: true,
    });

    app.use(cookieParser());
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
    return server;
};

export default async function handler(req: any, res: any) {
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    if (!cachedServer) {
        cachedServer = await createServer();
    }
    return cachedServer(req, res);
}