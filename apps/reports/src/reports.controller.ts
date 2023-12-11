import { Body, Controller, Get, Post, Res, HttpStatus, Param } from "@nestjs/common";
import { ReportsService } from './reports.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { RmqRecordBuilder } from "@nestjs/microservices";
import { CreateReportRequestDto } from "../dto/create-report-request.dto";
import { Response } from 'express';

@ApiBearerAuth()
@ApiTags('reports')
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) { }

  @Post()
  @ApiOperation({ summary: 'Create report' })
  @ApiResponse({ status: 201, description: 'Created' })
  @ApiResponse({ status: 400, description: 'Employee does not exist' })
  async createReport(@Body() request: CreateReportRequestDto, @Res() res: Response) {

    await this.reportsService.createReport(request).then(
      (report) => {
        res.status(HttpStatus.CREATED).send(report);
      },
      (error) => {
        res.status(HttpStatus.BAD_REQUEST).send(error);
      }
    );
  }

  @Get(':document/frequency/:frequency/startDate/:startDate/endDate/:endDate')
  @ApiOperation({ summary: 'Get report' })
  @ApiResponse({
    status: 200,
    description: 'The updated record'
  })
  async getReport(
    @Param('document') document: string,
    @Param('frequency') frequency: string,
    @Param('startDate') startDate: string,
    @Param('endDate') endDate: string, @Res() res: Response) {

    await this.reportsService.getReport(document, frequency, startDate, endDate).then(
      (report) => {
        res.status(HttpStatus.OK).send(report);
      },
      (error) => {
        res.status(HttpStatus.BAD_REQUEST).send(error);
      }
    );
  }

}
