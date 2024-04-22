import { Inject, Injectable } from '@nestjs/common';
import { CreateAttendeeDto } from '../Dto/create-attendee.dto';
import { ICreateAttendeesService } from '../structure/service-attendees-structure';
import { IAttendeesRepository } from '../structure/repository-attendees-structure';
import { AttendeesRepository } from 'src/database/repositories/attendees-repository';


@Injectable()
export class AttendeesService implements ICreateAttendeesService{
  constructor(
    @Inject(AttendeesRepository)
    private readonly attendeesRepo: IAttendeesRepository,
  ) { }
  create(createAttendeeDto: CreateAttendeeDto) {
    return 'This action adds a new attendee';
  }
}
