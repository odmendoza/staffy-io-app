import { Injectable, Logger } from "@nestjs/common";
import { AbstractRepository } from "@app/common";
import { Report } from "../schemas/report.schema";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";

@Injectable()
export class ReportsRepository extends AbstractRepository<Report> {

  protected readonly logger = new Logger(ReportsRepository.name);

  constructor(
    @InjectModel(Report.name) reportModel: Model<Report>,
    @InjectConnection() connection: Connection
  ) {
    super(reportModel, connection);
  }

}
