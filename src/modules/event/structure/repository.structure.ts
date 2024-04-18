import { createEventTypeParams } from "../types/event_params";
import { Event } from "@prisma/client";



export interface IEventRepository {
    register(params: createEventTypeParams): Promise<Event>
}