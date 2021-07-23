import React from 'react';
import styled from 'styled-components';
import FriendList from './FriendList';
// import Chatting from './Chatting';

interface Ch {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const Form = styled.div`
  background-color: #999;
  top: 110px;
  width: 90%;
  height: 900px;
  max-width: 1060px;
  max-height: 1000px;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const ChatRoom = styled.div``;

const ChattingList = ({ isMobile, isTablet, isDesktop }: Ch) => {
  return (
    <Form>
      <ChatRoom>채팅리스트</ChatRoom>
      {(isTablet || isDesktop) && <FriendList />}
    </Form>
  );
};

export default ChattingList;
