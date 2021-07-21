import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('ws://localhost:81/chat');

const Chatting = () => {
  const [chatting, setChatting] = useState<Array<String>>([]);
  const [info, setInfo] = useState({
    nickname: '',
    room: '',
    message: '',
  });

  useEffect(() => {
    socket.emit('hihi', info.nickname, info.room);
    /* 누군가 채팅침 */
    socket.on(info.room, (data: Array<string>) => {
      console.log('on room', `${data[0]} : ${data[1]}`);
      setChatting((chatting) => [...chatting, `${data[0]} : ${data[1]}`]);
    });
    /* 누군가 입장 */
    socket.on('comeOn' + info.room, (comeOn: string) => {
      console.log(comeOn);
      setChatting((chatting) => [...chatting, comeOn]);
    });
  }, []);

  const msg_send = () => {
    socket.emit('send', info.room, info.nickname, info.message);
    setChatting((chatting) => [...chatting, `나 : ${info.message}`]);
    setInfo({ ...info, message: '' });
  };

  const handleChange = (e: any) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
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
      </h1>
      <input name="nickname" value={info.nickname} onChange={handleChange}></input>
      <input name="room" value={info.room} onChange={handleChange}></input>
      <div id="chatList">
        {chatting.map((chat, idx) => {
          return (
            <div key={idx}>
              {idx}: {chat}
            </div>
          );
        })}
      </div>
      <div id="sendMessage">
        <input type="text" name="message" value={info.message} onChange={handleChange} onKeyPress={handleKeyPress} />
        <button onClick={msg_send}>제출</button>
      </div>
    </div>
  );
};

export default Chatting;
