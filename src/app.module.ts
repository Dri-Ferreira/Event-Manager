import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttendeesModule } from './modules/attendees/attendees.module';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [AttendeesModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
