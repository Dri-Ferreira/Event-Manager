import { Optional } from "@nestjs/common";
import { IsEmpty, IsNumber, IsString, MinLength } from "class-validator";
import { createEventTypeParams } from "../types/event_params";

export class CreateEventDto implements createEventTypeParams {
  @IsString()
  @MinLength(4)
  @IsEmpty()
  title: string;

  @IsString()
  @MinLength(4)
  @Optional()
  details?: string;

  @IsString()
  slug: string;

  @IsNumber()
  @Optional()
  maximumAttendees?: number;

}
