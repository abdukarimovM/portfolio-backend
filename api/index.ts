import 'pg';
import 'pg-hstore';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';

const server = express();
let cachedServer: any;

const allowedOrigins = [
    'https://admin.abdukarimovm.uz',
    'https://abdukarimovm.uz',
    'https://www.abdukarimovm.uz',
    'http://localhost:3000',
    'http://localhost:3001',
];

export const createServer = async () => {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

    app.enableCors({
        origin: (origin, callback) => {
            // Brauzerdan kelgan so'rov ro'yxatda bo'lsa yoki server-to-server bo'lsa ruxsat berish
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(null, true); // begona bo'lsa ham muammo qilmasligi uchun
            }
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

    // OPTIONS (preflight) so'rovlarini to'g'ridan-to'g'ri qondirish
    if (req.method === 'OPTIONS') {
        if (origin) {
            res.setHeader('Access-Control-Allow-Origin', origin);
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie, X-Requested-With');
        }
        return res.status(204).end();
    }

    if (!cachedServer) {
        cachedServer = await createServer();
    }
    return cachedServer(req, res);
}