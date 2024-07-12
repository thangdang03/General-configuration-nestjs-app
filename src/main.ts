import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import compression from 'helmet';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3200;
  app.use(helmet());
  app.use(compression());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port,()=>{
    console.log("server is running in port",port);
  });
}
bootstrap();
