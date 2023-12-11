import { NestFactory } from '@nestjs/core';
import { ReportsModule } from './reports.module';
import { RmqService } from "@app/common";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  // const app = await NestFactory.create(ReportsModule);
  // const rmqService = app.get<RmqService>(RmqService);
  // app.connectMicroservice(rmqService.getOptions(
  //   'REPORTS',
  // ));
  // await app.startAllMicroservices();

  const app = await NestFactory.create(ReportsModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get<ConfigService>(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('Reports')
    .setDescription('The reports API description')
    .setVersion('1.0.0')
    .addTag('reports')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);

  await app.listen(configService.get('PORT'));

}
bootstrap();
