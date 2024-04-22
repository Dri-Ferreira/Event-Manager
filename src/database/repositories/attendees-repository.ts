import { IAttendeesRepository } from "src/modules/attendees/structure/repository-attendees-structure";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";


@Injectable()
export class AttendeesRepository implements IAttendeesRepository{
    constructor( private readonly pisma: PrismaService){}
}