import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Event } from '@prisma/client';
import { IEventRepository } from "src/modules/event/structure/repository.structure";
import { createEventTypeParams } from "src/modules/event/types/event_params";
import { eventResponse } from "src/modules/event/types/event-response/event_response";


@Injectable()
export class EventRepository implements IEventRepository {
    constructor( private readonly prisma: PrismaService){}
    register(params: createEventTypeParams): Promise<eventResponse> {
        const { title, details, maximumAttendees ,slug} = params
        return this.prisma.event.create({
            data: { 
                title, 
                slug,
                details,
                maximumAttendees
             }
        })
    }

    exists(where: Partial<Event> | null): Promise<Event> {
        return this.prisma.event.findUnique({
            where: {
                slug: where.slug
            }
        })
    }
    
}
