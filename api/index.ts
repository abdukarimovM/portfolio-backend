import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const server = express();

export const createServer = async () => {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

    app.enableCors({
        origin: true,
        credentials: true,
    });

    await app.init();
    return server;
};

let cachedServer: any;

export default async function handler(req: any, res: any) {
    if (!cachedServer) {
        cachedServer = await createServer();
    }
    return cachedServer(req, res);
}