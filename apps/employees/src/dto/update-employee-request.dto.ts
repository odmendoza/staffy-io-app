import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeRequestDto } from './create-employee-request.dto';
import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class UpdateEmployeeRequestDto extends PartialType(CreateEmployeeRequestDto) {

  @ApiProperty()
  @IsString()
  _id: string;

}
