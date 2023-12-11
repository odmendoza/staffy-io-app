import { IsString, IsNotEmpty, IsNumber, IsDateString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateEmployeeRequestDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  document: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  hireDate: Date;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  salary: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  jobTitle: string;

}
