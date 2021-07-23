import { useEffect, useState } from 'react';
import io from 'socket.io-client';

// 소켓 연결 아래 두 가지 방법 다 됨.
const socket = io('ws://localhost:81/chat');
// const socket = io.connect('ws://localhost:81/chat');

const Chatting = () => {
  const [chatting, setChatting] = useState<Array<String>>([]);

  let nickname: string | null = null;
  let room: string | null = null;
  const [message, setMessage] = useState('');
  const [info, setInfo] = useState({
    nickname: '',
    room: '',
    message: '',
  });

  useEffect(() => {
    while (!(nickname = prompt('닉네임?'))) {
      alert('닉네임을 입력해주세요');
    }
    while (!(room = prompt('방 번호?'))) {
      alert('방번호를 입력해주세요');
    }
    setInfo({
      ...info,
      nickname: nickname,
      room: room,
    });
    socket.emit('hihi', nickname, room);
    /* 누군가 채팅침 */
    socket.on(room, (data: Array<string>) => {
      console.log('on room', `${data[0]} : ${data[1]}`);
      setChatting((chatting) => [...chatting, `${data[0]} : ${data[1]}`]);
    });
    /* 누군가 입장 */
    socket.on('comeOn' + room, (comeOn: string) => {
      console.log(comeOn);
      setChatting((chatting) => [...chatting, comeOn]);
    });
  }, []);

  const msg_send = () => {
    socket.emit('send', info.room, info.nickname, message);
    setChatting((chatting) => [...chatting, `나 : ${message}`]);
    setMessage('');
  };

  const handleChange = (e: any) => {
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
        시크릿 채팅방{' '}
        <span id="room" style={{ fontSize: 'large' }}>
          {info.nickname}:{info.room}
        </span>
      </h1>
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
        <input type="text" name="message" value={message} onChange={handleChange} onKeyPress={handleKeyPress} />
        <button onClick={msg_send}>제출</button>
      </div>
    </div>
  );
};

export default Chatting;
