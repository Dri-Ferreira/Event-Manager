import { Module } from '@nestjs/common';
import { AttendeesModule } from './modules/attendees/attendees.module';
import { DatabaseModule } from './database/database.modules';
import { EventModule } from './modules/event/event.module';

@Module({
  imports: [AttendeesModule, DatabaseModule, EventModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
