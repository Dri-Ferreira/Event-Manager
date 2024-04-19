import { Controller, Post, Body, Inject } from '@nestjs/common';
import { EventService } from './service/event.service';
import { CreateEventDto } from './Dto/create-event.dto';


@Controller('events')
export class EventController {
  constructor(
     @Inject(EventService)
    private readonly eventService: EventService) {}

  @Post()
  create(@Body() createEvent: CreateEventDto) {
    return this.eventService.execute(createEvent);
  }

}
