import React from 'react';
import styled from 'styled-components';
import FriendList from './FriendList';
// import Chatting from './Chatting';

interface Ch {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const Tag = styled.div`
  position: relative;
  top: 110px;
`;

const Form = styled.div`
  /* background-color: #999; */
  width: 90%;
  height: auto;
  max-width: 1060px;
  max-height: 3000px;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: 768px) and (max-width: 1480px) {
    /* background-color: #999; */
    width: 73%;
    height: auto;
    max-width: 1000px;
    max-height: 3000px;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const ChatRoom = styled.div`
  background-color: #4580a1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Room = styled.div`
  box-sizing: border-box;
  border: 1px solid #333;
  width: 200px;
  height: 150px;
  margin: 20px;
  padding: 15px;
`;

const datas = [
  {
    owner: 'yonglee',
    roomName: 'hello',
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

const ChattingList = ({ isMobile, isTablet, isDesktop }: Ch) => {
  return (
    <Tag>
      <Form>
        <ChatRoom>
          {datas.map((data) => {
            return (
              <Room>
                <div>{data.owner}</div>
                <div>{data.roomName}</div>
                <div>{`${data.members} / ${data.maxMembers}`}</div>
                <button>Join</button>
              </Room>
            );
          })}
        </ChatRoom>
        {(isTablet || isDesktop) && <FriendList />}
      </Form>
    </Tag>
  );
};

export default ChattingList;
