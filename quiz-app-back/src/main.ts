import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
  app.useGlobalPipes(new ValidationPipe()); // Optional: Import and use ValidationPipe for request validation
  app.enableCors(); // Optional: Enable CORS if needed
  await app.listen(8000);
}
bootstrap();
