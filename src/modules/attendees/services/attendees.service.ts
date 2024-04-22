import { Inject, Injectable } from '@nestjs/common';
import { ICreateAttendeesService } from '../structure/service-attendees-structure';
import { IAttendeesRepository } from '../structure/repository-attendees-structure';
import { AttendeesRepository } from 'src/database/repositories/attendees-repository';
import { createAttendeesTypeParams } from '../types/attendees-params';
import { attendeesResponse } from '../types/attendees-response';


@Injectable()
export class AttendeesService implements ICreateAttendeesService{
  constructor(
    @Inject(AttendeesRepository)
    private readonly attendeesRepo: IAttendeesRepository,
  ) { }
  createAttendees(param: createAttendeesTypeParams): Promise<attendeesResponse> {
    throw new Error('Method not implemented.');
  }
}
