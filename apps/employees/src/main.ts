import { NestFactory } from '@nestjs/core';
import { EmployeesModule } from './employees.module';
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
// import { EmployeesModule } from "../../reports/src/reports.module";
import { RmqService } from "@app/common";

async function bootstrap() {
  // const app = await NestFactory.create(EmployeesModule);
  // app.useGlobalPipes(new ValidationPipe());
  // const configService = app.get<ConfigService>(ConfigService);
  //

  //
  // await app.listen(configService.get('PORT'));

  const app = await NestFactory.create(EmployeesModule);
  const configService = app.get<ConfigService>(ConfigService);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('EMPLOYEES'));
  await app.startAllMicroservices();

  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Employees')
    .setDescription('The employees API description')
    .setVersion('1.0.0')
    .addTag('employees')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);
  await app.listen(configService.get('PORT'));

}
bootstrap();
