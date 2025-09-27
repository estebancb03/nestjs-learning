import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Cleans the data that DTO's are not looking for
      forbidNonWhitelisted: true // Throws an exception if more information is being sent
    }),
  );

  await app.listen(3000);
}
bootstrap();
