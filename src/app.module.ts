import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AttendeesModule } from './modules/attendees/attendees.module';
import { DatabaseModule } from './database/database.modules';
import { EventModule } from './modules/event/event.module';

@Module({
  imports: [AttendeesModule, DatabaseModule, EventModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
