import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { EventRepository } from './repositories/event-repository';

@Global()
@Module({
  providers: [
    PrismaService,
    EventRepository
  ],
  exports: [
    EventRepository
  ],
})

export class DatabaseModule {}
