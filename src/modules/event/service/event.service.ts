import { Inject, Injectable } from '@nestjs/common';
import { CreateEventDto } from '../Dto/create-event.dto';
import { UpdateEventDto } from '../Dto/update-event.dto';
import { IcreateEventService } from '../structure/service.structure';
import { IEventRepository } from '../structure/repository.structure';
import { createEventTypeParams } from '../types/event_params';
import { EventRepository } from 'src/database/repositories/event-repository';
import { eventResponse } from '../types/event-response/event_response';

@Injectable()
export class EventService implements IcreateEventService{
  constructor(
    @Inject(EventRepository)
    private readonly eventRepo: IEventRepository,
  ){}
  
  async execute(params: createEventTypeParams): Promise<eventResponse> {
    const event = await this.eventRepo.register(params)
    return event
  }
}
