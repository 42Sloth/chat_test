import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Modal from './Modal';

const Ul = styled.ul`
  list-style: 'none';
  margin: 0;
  padding: 0;
  list-style-type: disc;
`;

const List = styled.li`
  position: relative;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
`;

// const EnterList = styled.li`
//   height: 100%;
//   vertical-align: middle;
//   position: relative;
//   display: inline-flex;
//   &::before {
//     display: block;
//     content: '';
//     width: 1px;
//     height: 10px;
//     background-color: #e1e2e3;
//     margin: auto 10px;
//   }
// `;

const SignupButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0 10px;
  margin-right: 6px;
  height: 100;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
`;

interface SL {
  isMobile: boolean;
  login: boolean;
  handleLogin: any;
  handleLogout: any;
}

const SideList = ({ isMobile, login, handleLogin, handleLogout }: SL) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClick = () => {
    openModal();
  };

  return (
    <div style={{ height: '100%', padding: '10px 0 10px 0' }}>
      <Ul>
        <List className="search">
          <SearchIcon style={{ marginTop: '5px', padding: '0 10px', cursor: 'pointer' }} />
        </List>
        {login && (
          <List>
            <NotificationsNoneIcon
              style={{
                marginTop: '5px',
                marginRight: '10px',
                padding: '0 10px',
                cursor: 'pointer',
              }}
            />
          </List>
        )}
        {login && !isMobile && (
          <List style={{}}>
            <Avatar
              style={{
                cursor: 'pointer',
                height: '32px',
                fontSize: '14px',
                width: '32px',
              }}
            />
          </List>
        )}
        {!isMobile && !login && (
          <List
            className="signup"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              marginRight: '5px',
            }}
          >
            {!login && <SignupButton onClick={handleLogin}>login</SignupButton>}
          </List>
        )}
        {isMobile && (
          <List className="Menu">
            <MenuIcon style={{ cursor: 'pointer', marginRight: '20px' }} onClick={handleClick} />
          </List>
        )}
      </Ul>
      {modalOpen && <Modal closeModal={closeModal} login={login} handleLogout={handleLogout} />}
    </div>
  );
};

export default SideList;
