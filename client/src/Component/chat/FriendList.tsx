import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  background-color: #198013;
  right: 0;
  width: 150px;
  height: 100%;
  position: fixed;
`;

const FriendList = () => {
  return <List>친구 리스트</List>;
};

export default FriendList;
