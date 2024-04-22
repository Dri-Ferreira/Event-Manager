import { createEventTypeParams } from "../types/event_params";
import { Event } from "@prisma/client";

export interface IcreateEventService {
    execute(params: createEventTypeParams): Promise<Event>;
}