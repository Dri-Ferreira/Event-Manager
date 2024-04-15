import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AttendeesModule } from './modules/attendees/attendees.module';
import { DatabaseModule } from './database/database.modules';

@Module({
  imports: [AttendeesModule, DatabaseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
