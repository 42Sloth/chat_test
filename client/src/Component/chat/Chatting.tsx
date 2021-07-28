import React, { useState } from 'react';
import styled from 'styled-components';
import FriendList from './FriendList';
import ChattingRoom from './ChattingRoom';
import List from './List';

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
  /* display: flex; */
  /* justify-content: space-between; */
  /* flex-wrap: wrap; */
  /* @media (min-width: 768px) and (max-width: 1480px) {
    background-color: #999;
    width: 73%;
    height: auto;
    max-width: 1000px;
    max-height: 3000px;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  } */
`;

const ChattingList = ({ isMobile, isTablet, isDesktop }: Ch) => {
  return (
    <Tag>
      <Form>
        {(isTablet || isDesktop) && <List />}
        <ChattingRoom />
      </Form>
    </Tag>
  );
};

export default ChattingList;
