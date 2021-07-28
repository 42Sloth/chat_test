import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  /* background-color: #198013; */
  height: 40vh;
  width: 200px;
  overflow-y: auto;
  border: 2px solid #333;
  border-top: 1px solid #333;
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

const FriendList = () => {
  return (
    <List>
      <Head>
        <div>Friends</div>
      </Head>
      <div style={{ marginTop: '55px' }}>
        {datas.map((data, idx) => {
          return (
            <Box key={idx}>
              <div style={{ overflow: 'hidden', width: '98px', whiteSpace: 'nowrap' }}>{data.nickname}</div>
              <div>
                <i>{data.status === 'onLine' ? 'o' : data.status === 'offLine' ? 'x' : 'g'}</i>
              </div>
            </Box>
          );
        })}
      </div>
    </List>
  );
};

export default FriendList;

const datas = [
  {
    nickname: 'yonglee',
    status: 'onLine',
  },
  {
    nickname: 'esim',
    status: 'onLine',
  },
  {
    nickname: 'sebaek',
    status: 'onLine',
  },
  {
    nickname: 'jakang',
    status: 'onLine',
  },
  {
    nickname: 'juhlee',
    status: 'onLine',
  },
  {
    nickname: 'taehkim',
    status: 'onLine',
  },
  {
    nickname: 'yonglee',
    status: 'onLine',
  },
  {
    nickname: 'esim',
    status: 'onLine',
  },
  {
    nickname: 'sebaek',
    status: 'onLine',
  },
  {
    nickname: 'jakang',
    status: 'onLine',
  },
  {
    nickname: 'juhlee',
    status: 'offLine',
  },
  {
    nickname: 'taehkim',
    status: 'offLine',
  },
  {
    nickname: 'yonglee',
    status: 'offLine',
  },
  {
    nickname: 'esim',
    status: 'offLine',
  },
  {
    nickname: 'sebaek',
    status: 'offLine',
  },
  {
    nickname: 'jakang',
    status: 'offLine',
  },
  {
    nickname: 'juhlee',
    status: 'offLine',
  },
  {
    nickname: 'taehkim',
    status: 'offLine',
  },
  {
    nickname: 'yonglee',
    status: 'offLine',
  },
  {
    nickname: 'esim',
    status: 'offLine',
  },
  {
    nickname: 'sebaek',
    status: 'offLine',
  },
  {
    nickname: 'jakang',
    status: 'offLine',
  },
  {
    nickname: 'juhlee',
    status: 'offLine',
  },
  {
    nickname: 'taehkim',
    status: 'offLine',
  },
  {
    nickname: 'yonglee',
    status: 'inGame',
  },
  {
    nickname: 'esim',
    status: 'inGame',
  },
  {
    nickname: 'sebaek',
    status: 'inGame',
  },
  {
    nickname: 'jakang',
    status: 'inGame',
  },
  {
    nickname: 'juhlee',
    status: 'inGame',
  },
  {
    nickname: 'taehkim',
    status: 'inGame',
  },
];
