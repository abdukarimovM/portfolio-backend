import 'pg';
import 'pg-hstore';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { allowedOrigins } from '../src/cors';

const server = express();
server.disable('etag');
let cachedServer: any;

export const createServer = async () => {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

    app.use((_req, res, next) => {
        res.setHeader('Cache-Control', 'private, no-store, no-cache, must-revalidate, max-age=0');
        res.setHeader('Vary', 'Origin');
        next();
    });

    app.enableCors({
        origin: (origin, callback) => {
            callback(null, !origin || allowedOrigins.includes(origin));
        },
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Cookie', 'X-Requested-With'],
    });

    app.use(cookieParser());
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
    return server;
};

export default async function handler(req: any, res: any) {
    const origin = req.headers.origin;

    // Preflight so'rovlariga faqat ruxsat berilgan originlar uchun javob berish.
    if (req.method === 'OPTIONS') {
        if (origin && allowedOrigins.includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie, X-Requested-With');
            res.setHeader('Vary', 'Origin');
        }
        res.setHeader('Cache-Control', 'no-store');
        return res.status(204).end();
    }

    if (!cachedServer) {
        cachedServer = await createServer();
    }
    return cachedServer(req, res);
}