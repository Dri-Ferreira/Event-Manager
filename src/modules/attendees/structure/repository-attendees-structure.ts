import { Attendee } from "@prisma/client";
import { createAttendeesTypeParams } from "../types/attendees-params";


export interface IAttendeesRepository {
    create(param: createAttendeesTypeParams ): Promise<Attendee>
    exists(where: Partial<Attendee>): Promise<Attendee>
}