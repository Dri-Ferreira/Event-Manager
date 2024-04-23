import { IAttendeesRepository } from 'src/modules/attendees/structure/repository-attendees-structure';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { createAttendeesTypeParams } from 'src/modules/attendees/types/attendees-params';
import { Attendee } from '@prisma/client';

@Injectable()
export class AttendeesRepository implements IAttendeesRepository {
  constructor(private readonly prisma: PrismaService) {}
  create(params: createAttendeesTypeParams): Promise<Attendee> {
    return this.prisma.attendee.create({
      data: {
        name: params.name,
        email: params.email,
        eventId: params.eventId,
      },
    });
  }
}
