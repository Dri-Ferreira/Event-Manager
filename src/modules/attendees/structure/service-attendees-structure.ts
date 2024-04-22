import { createAttendeesTypeParams } from "../types/attendees-params";
import { attendeesResponse } from "../types/attendees-response";

export interface ICreateAttendeesService {
    createAttendees(param: createAttendeesTypeParams): Promise<attendeesResponse>;
}