import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Room } from "./room.entity";
import { Repository } from "typeorm";

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room) private readonly roomRepository: Repository<Room>
  ) {
  }

  async all(): Promise<Room[]>{
    return this.roomRepository.find();
  }

  async create(data): Promise<Room> {
    return this.roomRepository.save(data);
  }

  async update(id: number, password: string): Promise<any>{
    return this.roomRepository.update(id, { password });
  }

  async delete(id: number): Promise<any>{
    return this.roomRepository.delete(id);
  }
}
