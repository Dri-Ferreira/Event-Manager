import { BadRequestException, Inject, Injectable } from '@nestjs/common';
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
  async createAttendees(params: createAttendeesTypeParams): Promise<attendeesResponse> {

    const checkRegistration = await this.attendeesRepo.exists({ email: params.email });

    if (checkRegistration) throw new BadRequestException("Email already registered on the events platform")
    return await this.attendeesRepo.create(params);
  }
}
