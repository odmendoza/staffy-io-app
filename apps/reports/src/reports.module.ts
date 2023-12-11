import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { DatabaseModule, RmqModule } from "@app/common";
import { ConfigModule } from "@nestjs/config";
import { EMPLOYEES_SERVICE } from "../constants/services";
import * as Joi from "joi";
import { Report, ReportSchema } from "../schemas/report.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { ReportsRepository } from "./reports.repository";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/reports/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }]),
    RmqModule.register({ name: EMPLOYEES_SERVICE }),
  ],
  controllers: [ReportsController],
  providers: [
    ReportsService,
    ReportsRepository
  ],
})
export class ReportsModule {}
