import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { ConfigModule } from "@nestjs/config";
import * as Joi from 'joi';
import { DatabaseModule, RmqModule } from "@app/common";
import { EmployeesRepository } from "./employees.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { Employee, EmployeeSchema } from "./schemas/employee.schema";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/employees/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }]),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_EMPLOYEES_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/employees/.env',
    }),
    RmqModule
  ],
  controllers: [EmployeesController],
  providers: [
    EmployeesService,
    EmployeesRepository
  ],
})
export class EmployeesModule { }
