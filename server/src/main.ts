import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose'

async function bootstrap() {
  mongoose.connect('mongodb://localhost/nest-blog-api')
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Blog API')
    .setDescription('第一个nest + vue 博客项目')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);


  await app.listen(6416);
}
bootstrap();
