import { IsEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateEventDto {

    @IsString()
    @MinLength(4)
    @IsEmpty()
    name: String

    @IsString()
    slug: String

    @IsNumber()
    attendeesNumbers: Number
  
}
