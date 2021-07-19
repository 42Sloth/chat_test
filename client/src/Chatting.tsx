import React, { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import MyInput from './MyInput';

// problem : 리렌더링 될때마다 소켓을 새로 연결함
let socket: Socket;
// socket = io('ws://localhost:81/chat');

const Chatting = () => {
  //   let message : String;
  //   let chatting: String[];
  //   let nickname : String;
  //   let room : String;
  console.log('state init');
  const [message, setMessage] = useState('');
  const [chatting, setChatting] = useState<Array<String>>(['hihihi']);
  const [nickname, setNickname] = useState('a');
  const [room, setRoom] = useState('123');
  console.log('state init complete');

  console.log('hi');

  useEffect(() => {
    // while (!(name = prompt('nickname'))) {
    //   alert('nickname!');
    // }
    // while (!(room = prompt('room code'))) {
    //   alert('room code!');
    // }
    // if (!name) {
    //   window.location.reload();

    // } else setNickname(name);
    // const code = prompt('입장할 방의 코드를 적어주세요.');
    // if (!code) {
    //   window.location.reload();
    // } else setRoom(code);
    socket = io('ws://localhost:81/chat');
    socket.emit('hihi', nickname, room);

    //   socket.on('connect', () => {
    /* 누군가 채팅침 */
    socket.on(room, (data) => {
      //   $('#chatList').append(`<div>${data[0]} : ${data[1]}</div>`);
      console.log('chatting', chatting);
      //   setChatting([...chatting, `${data[0]} ::: ${data[1]}`]);
      setChatting(chatting.concat([`${data[0]} ::: ${data[1]}`]));
      console.log('chatting', chatting);

      console.log('on room', `${data[0]} : ${data[1]}`);
    });
    /* 누군가 입장 */
    socket.on('comeOn' + room, (comeOn) => {
      //   $('#chatList').append(`<div style="color:blue;">${comeOn}</div>`);
      console.log('chatting', chatting);
      setChatting([...chatting, comeOn]);
      console.log('comeon room', comeOn);
    });
  }, []);

  //   //   socket.on('connect', () => {
  //   /* 누군가 채팅침 */
  //   socket.on(room, (data) => {
  //     //   $('#chatList').append(`<div>${data[0]} : ${data[1]}</div>`);
  //     setChatting([...chatting, `${data[0]} : ${data[1]}`]);
  //     console.log('on room');
  //   });
  //   /* 누군가 입장 */
  //   socket.on('comeOn' + room, (comeOn) => {
  //     //   $('#chatList').append(`<div style="color:blue;">${comeOn}</div>`);
  //     setChatting([...chatting, comeOn]);
  //     // console.log('comeon room', comeOn);
  //     console.log('comeon room');
  //   });

  const msg_send = () => {
    /* 메시지 전송 */
    //           let message = $('#msg').val();
    //           socket.emit('send', room, nickname, message);
    //           $('#msg').val('');
    //           $('#chatList').append(`<div style="color:red;">나 : ${message}</div>`);
    //         $(document).ready(() => {
    //             $('#room').text(`${room}`);
    //         });
    // console.log('msg_send', room, nickname, message);
    socket.emit('send', room, nickname, message);
    // setChatting([...chatting, `나 : ${message}`]);
    setMessage('');
  };

  const handleChange = (e: any) => {
    // console.log(e.target.value);
    setMessage(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      msg_send();
    }
  };

  return (
    <div>
      <h1>
        시크릿 채팅방 <span id="room" style={{ fontSize: 'large' }}></span>
        {room && <span style={{ fontSize: 'large' }}>{room}</span>}
      </h1>
      <div id="chatList">
        {chatting.map((chat, idx) => {
          return (
            <div key={idx}>
              {idx}, {chat}
            </div>
          );
        })}
      </div>
      <div id="sendMessage" style={{ position: 'fixed', bottom: '5%' }}>
        <input type="text" name="msg" value={message} onChange={handleChange} onKeyPress={handleKeyPress} />
        <button onClick={msg_send}>제출</button>
        {/* <MyInput
          chatting={chatting}
          setChatting={setChatting}
          socket={socket}
          room={room}
          nickname={nickname}
          message={message}
        /> */}
      </div>
    </div>
  );
};

export default Chatting;
