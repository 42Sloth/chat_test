import React, { useState } from 'react';
import styled from 'styled-components';
import FriendList from './FriendList';

const ChatroomList = styled.div`
  /* background-color: #4580a1; */
  height: 40vh;
  width: 200px;
  overflow-y: auto;
  border: 2px solid #333;
  border-bottom: 1px solid #333;
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: space-around; */
`;

const Head = styled.header`
  text-align: center;
  align-items: center;
  width: 200px;
  height: 50px;
  margin: 0 auto;
  position: fixed;
  background-color: #333;
  color: #fff;
  font-weight: 900;

  & > div {
    margin-top: 16px;
  }
`;

const Box = styled.button`
  box-sizing: border-box;
  border: 1px solid #333;
  width: 150px;
  height: 50px;
  margin: 3px 17px 3px 17px;
  padding: 5px;
  display: flex;
  align-items: center;
`;

const List = () => {
  //   const [roomData, setRoomData] = useState({
  //     owner: '',
  //     roomName: '',
  //   });

  const handleJoin = (e: any) => {
    console.log(e.target.name);
    console.log(e.target.id);
  };
  return (
    <div>
      <ChatroomList>
        <Head>
          <div>Chatting</div>
        </Head>
        <div style={{ marginTop: '55px' }}>
          {datas.map((data, idx) => {
            return (
              <Box key={idx}>
                <div style={{ overflow: 'hidden', width: '98px', whiteSpace: 'nowrap' }}>{data.roomName}</div>
                <div>
                  <button
                    id={data.roomName}
                    name={data.owner}
                    onClick={handleJoin}
                    style={{ border: '0.5px solid #333', borderRadius: '5px' }}
                  >
                    Join
                  </button>
                </div>
              </Box>
            );
          })}
        </div>
      </ChatroomList>
      <FriendList />
    </div>
  );
};

const datas = [
  {
    owner: 'yonglee',
    roomName: 'asdfasd asf sadf asdf sadf as fasdfasdf',
    members: 17,
    maxMembers: 20,
  },
  {
    owner: 'juhlee',
    roomName: 'hello',
    members: 7,
    maxMembers: 20,
  },
  {
    owner: 'jakang',
    roomName: 'hello',
    members: 1,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
  {
    owner: 'esim',
    roomName: 'hello',
    members: 20,
    maxMembers: 20,
  },
];

export default List;
