import { Injectable } from '@nestjs/common';
import { CreateAttendeeDto } from '../Dto/create-attendee.dto';
import { UpdateAttendeeDto } from '../Dto/update-attendee.dto';


@Injectable()
export class AttendeesService {
  create(createAttendeeDto: CreateAttendeeDto) {
    return 'This action adds a new attendee';
  }

  findAll() {
    return `This action returns all attendees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attendee`;
  }

  update(id: number, updateAttendeeDto: UpdateAttendeeDto) {
    return `This action updates a #${id} attendee`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendee`;
  }
}
