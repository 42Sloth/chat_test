import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Client, Server, Socket } from 'socket.io';

@WebSocketGateway(81, { namespace: 'chat' })
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  // private broadcast(event, client, message: any) {
  //   for (let id in this.server.sockets)
  //     if (id !== client.id) this.server.sockets[id].emit(event, message);
  // }

  @SubscribeMessage('hihi')
  connectSomeone(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ) {
    const [nickname, room] = data;
    console.log(`${nickname}님이 코드: ${room}방에 접속했습니다.`);
    const comeOn = `${nickname}님이 입장했습니다.`;
    console.log('server', this.server);
    client.broadcast.emit('comeOn' + room, comeOn);
    // this.broadcast('comeOn' + room, client, comeOn);
  }

  @SubscribeMessage('send')
  sendMessage(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    const [room, nickname, message] = data;
    console.log(`${client.id} : ${data}`);
    console.log('server', this.server);
    client.broadcast.emit(room, [nickname, message]);
    // this.broadcast(room, client, [nickname, message]);
  }
}
