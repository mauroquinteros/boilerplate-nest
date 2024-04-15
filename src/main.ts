import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppLogger } from './shared/services/logger.service';

async function bootstrap() {
  const logger = new AppLogger();

  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    logger: logger,
  });
  app.setGlobalPrefix('api');

  const port = app.get(ConfigService).get<number>('server.port');

  await app.listen(port, '0.0.0.0');

  logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
