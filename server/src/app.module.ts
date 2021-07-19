import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { TypeOrmModule } from "@nestjs/typeorm";
import { RoomModule } from './room/room.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'qhdks100!',
      database: 'study_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    RoomModule,
  ],
  providers: [ChatGateway],
})
export class AppModule {}
