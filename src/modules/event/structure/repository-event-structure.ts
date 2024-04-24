import { Event } from '@prisma/client';
import { createEventTypeParams } from "../types/event_params";
import { eventResponse } from '../types/event-response/event_response';



export interface IEventRepository {
    register(params: createEventTypeParams): Promise<eventResponse>
    exists(where: Partial<Event> | null): Promise<Event>
    searchEventsAll(): Promise<Event[]>
}

