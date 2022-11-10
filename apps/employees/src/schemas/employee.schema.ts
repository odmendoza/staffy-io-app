import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "@app/common";
import { ApiProperty } from "@nestjs/swagger";

@Schema({ versionKey: false })
export class Employee extends AbstractDocument {

  @ApiProperty({ example: "Juan" })
  @Prop({ required: true })
  firstName: string;

  @ApiProperty({ example: "Pérez" })
  @Prop({ required: true })
  lastName: string;

  @ApiProperty({ example: "0909090909" })
  @Prop({ required: true })
  document: string;

  @ApiProperty({ example: "mail@gmail.com" })
  @Prop({ required: true })
  email: string;

  @ApiProperty({ example: "099 9270 426" })
  @Prop({ required: true })
  phone: string;

  @ApiProperty({ example: "Calle 1, 23-45 Loja - Ecuador" })
  @Prop({ required: true })
  address: string;

  @ApiProperty({ example: "2021-01-01" })
  @Prop({ required: true })
  hireDate: Date;

  @ApiProperty({ example: 3200 })
  @Prop({ required: true })
  salary: number;

  @ApiProperty({ example: "Desarrollador de Software" })
  @Prop({ required: true })
  jobTitle: string;

}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
