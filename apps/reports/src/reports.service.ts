import { Inject, Injectable, Logger } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { EMPLOYEES_SERVICE } from "../constants/services";
import { CreateReportRequestDto } from "../dto/create-report-request.dto";
import { ReportsRepository } from "./reports.repository";
import { Report } from "../schemas/report.schema";
import moment from "moment/moment";

interface EmployeeReport {
  document: string;
  frequency: string;
  startDate: string;
  endDate: string;
  hoursWorked: any;
}

@Injectable()
export class ReportsService {

  private readonly logger = new Logger(ReportsService.name);

  constructor(
    private readonly reportsRepository: ReportsRepository,
    @Inject(EMPLOYEES_SERVICE) private readonly reportsClient: ClientProxy,
  ) { }

  async createReport(request: CreateReportRequestDto): Promise<Report> {
    return new Promise((resolve, reject) => {

      this.reportsClient.send("isValid", request.document).subscribe(async (response) => {

        if (response === "SI") {
          const report = await this.reportsRepository.create(request);
          resolve(report);
        } else {
          reject("Employee does not exist");
        }

      });
    });
  }

  async getReport(document: string, frequency: string, startDate: string, endDate: string): Promise<EmployeeReport> {

    const groupBy = require('lodash/groupBy');
    const moment = require('moment');

    const reports = await this.reportsRepository.find({ document, entry: { $gte: startDate, $lte: endDate } });

    const hoursWorkedByDay = groupBy(reports, (report) => {
      return moment(report.entry).format('YYYY-MM-DD');
    });

    const hoursWorked = Object.keys(hoursWorkedByDay).map((key) => {
      const entry = hoursWorkedByDay[key][0].entry;
      const exit = hoursWorkedByDay[key][hoursWorkedByDay[key].length - 1].entry;
      const hours = moment(exit).diff(moment(entry), 'hours', true);
      return {
        date: key,
        entry,
        exit,
        hours
      }
    });

    let entries = [];

    switch (frequency) {
      case "WEEKLY":
        entries = groupBy(hoursWorked, (entry) => moment(entry.date).week());
        break;
      case "MONTHLY":
        entries = groupBy(hoursWorked, (entry) => moment(entry.date).month());
        break;
      default:
        entries = groupBy(hoursWorked, (entry) => moment(entry.date).month());
        break;
    }

    const employeeReport: EmployeeReport = {
      document: document,
      frequency: frequency,
      startDate: startDate,
      endDate: endDate,
      hoursWorked: entries
    };

    return employeeReport;
  }

}
