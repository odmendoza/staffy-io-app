import { PartialType } from '@nestjs/mapped-types';
import { CreateReportRequestDto } from './create-report-request.dto';
import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateReportRequestDto extends PartialType(CreateReportRequestDto) {

  @ApiProperty()
  @IsString()
  _id: string;

}
