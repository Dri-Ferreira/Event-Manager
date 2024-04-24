import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { IcreateEventService } from '../structure/service-event-structure';
import { IEventRepository } from '../structure/repository-event-structure';
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

    const eventAlreadyExists = await this.eventRepo.exists({
      slug: params.slug,
    });

    if (eventAlreadyExists !== null) throw new BadRequestException("Event already created on the platform");
    const event = await this.eventRepo.register(params)
    return event
  }

  async searchEventsAll(): Promise<eventResponse[]> {
    return await this.eventRepo.searchEventsAll()
  }
}
