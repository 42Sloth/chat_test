import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RoomService } from "./room.service";

@Controller('room')
export class RoomController {
  constructor(
    private roomService: RoomService,
  ) {
  }

  @Get()
  all(){
    return this.roomService.all();
  }

  @Post()
  create(
    @Body('password') password: string,
    ){
    const room = this.roomService.create({password});
    return room;
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body('password') password: string,
  ){
    const room = this.roomService.update(id, password);
    return room;
  }

  @Delete(':id')
  async delete(
    @Param('id') id: number,
  ){
    const room = this.roomService.delete(id);
  }
}
