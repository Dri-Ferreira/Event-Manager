import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { EventRepository } from './repositories/event-repository';
import { AttendeesRepository } from './repositories/attendees-repository';

@Global()
@Module({
  providers: [
    PrismaService,
    EventRepository,
    AttendeesRepository
  ],
  exports: [
    EventRepository
  ],
})

export class DatabaseModule {}
