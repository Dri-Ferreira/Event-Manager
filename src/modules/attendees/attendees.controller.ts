import {
  Controller,
  Post,
  Body,

} from '@nestjs/common';
import { AttendeesService } from './services/attendees.service';
import { CreateAttendeeDto } from './Dto/create-attendee.dto';


@Controller('attendees')
export class AttendeesController {
  constructor(private readonly attendeesService: AttendeesService) {}

  @Post()
  create(@Body() createAttendeeDto: CreateAttendeeDto) {
    return this.attendeesService.createAttendees(createAttendeeDto);
  }

}
