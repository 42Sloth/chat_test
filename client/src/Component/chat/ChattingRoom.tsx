import { useEffect, useState } from 'react';
import io from 'socket.io-client';

// interface Ch {
//   isMobile: boolean;
//   isTablet: boolean;
//   isDesktop: boolean;
// }

// 소켓 연결 아래 두 가지 방법 다 됨.
const socket = io('ws://localhost:81/chat');
// const socket = io.connect('ws://localhost:81/chat');

const ChattingRoom = () => {
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
    // while (!(nickname = prompt('닉네임?'))) {
    //   alert('닉네임을 입력해주세요');
    // }
    // while (!(room = prompt('방 번호?'))) {
    //   alert('방번호를 입력해주세요');
    // }
    nickname = 'yonglee';
    room = '42';
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

  //   const scrollEvent = () => {
  //       const scrollHeight = document.documentElement.scrollHeight;
  //       const scrollTop = document.documentElement.scrollTop;
  //       const clientHeight = document.documentElement.clientHeight;
  //       if (scrollHeight >= clientHeight) {
  //       }
  //   }

  //   const handleScroll = () => {
  //       scrollEvent();
  //   }

  //   useEffect(() => {
  //       window.addEventListener("scroll", handleScroll);
  //       return () => {
  //           window.removeEventListener("scroll", handleScroll);
  //       };
  //   });

  return (
    <div style={{ width: '100%', height: '76vh', backgroundColor: '#1afb', padding: '30px' }}>
      <div style={{ height: '40px' }}>채팅방 이름 or dm 이름</div>
      <div
        style={{
          backgroundColor: '#8a56bc',
          width: '100%',
          height: '65vh',
          overflowY: 'auto',
          border: '2px solid #333',
        }}
      >
        {chatting.map((chat, idx) => {
          return (
            <div key={idx} style={{ height: '30px' }}>
              {chat}
            </div>
          );
        })}
      </div>
      <div>
        <input
          type="text"
          name="message"
          value={message}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          style={{ bottom: '5%' }}
        />
        <button onClick={msg_send}>제출</button>
      </div>
    </div>
  );
};

export default ChattingRoom;
