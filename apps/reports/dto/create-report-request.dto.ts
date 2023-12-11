import { IsString, IsNotEmpty, IsDateString, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateReportRequestDto {

  @ApiProperty({ example: "0909090909" })
  @IsString()
  @IsNotEmpty()
  document: string;

  @ApiProperty({ example: "2022-11-10T04:09:35.539Z" })
  @IsDateString()
  entry: Date;

  @ApiProperty({ example: "EXIT/ENTRY" })
  @IsString()
  @IsNotEmpty()
  type: string;

}
