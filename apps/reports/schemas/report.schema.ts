import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "@app/common";
import { ApiProperty } from "@nestjs/swagger";

@Schema({ versionKey: false })
export class Report extends AbstractDocument {

  @ApiProperty({ example: "0909090909" })
  @Prop({ required: true })
  document: string;

  @ApiProperty({ example: "2022-11-10T04:09:35.539Z" })
  @Prop({ required: true })
  entry: Date;

  @ApiProperty({ example: "EXIT/ENTRY" })
  @Prop({ required: true })
  type: string;

}

export const ReportSchema = SchemaFactory.createForClass(Report);
