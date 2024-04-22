import { IsEmail, IsEmpty, IsString, IsUUID } from "class-validator";
import { createAttendeesTypeParams } from "../types/attendees-params";

export class CreateAttendeeDto implements createAttendeesTypeParams {
    @IsString()
    @IsEmpty()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsUUID()
    eventId: string;

}
