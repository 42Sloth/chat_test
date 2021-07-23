import React, { useState } from 'react';
import Title from './Title';
import BarList from './BarList';
import Menu from './Menu';
import SideList from './SideList';
import styled from 'styled-components';

interface GNB {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

interface Des {
  login: boolean;
}

const Header = styled.div`
  background-color: #fff;
  position: fixed;
  padding-right: initial;
  width: 100%;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  box-sizing: border-box;
  display: block;
  text-size-adjust: 100%;
  z-index: 100;
  opacity: 1;
`;

const Desktop = styled.div`
  margin: 0 auto;
  height: 50px;
  width: 90%;
  position: relative;
  max-width: 1060px;
  padding: 0;
  border: 0;
  display: block;

  @media (max-width: 767px) {
    height: ${(props: Des) => (props.login ? '52px' : '102px')};
    width: 100%;
  }
`;

const Nav = styled.div`
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GlobalNavBar = ({ isMobile, isTablet, isDesktop }: GNB) => {
  const [searchHover, setSearchHover] = useState(false);
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
  };

  return (
    <div>
      <Header>
        <Desktop className="inner" login={login}>
          <Nav>
            {(!isMobile || !login) && <Title isMobile={isMobile} handleLogin={handleLogin} />}
            <BarList
              searchHover={searchHover}
              setSearchHover={setSearchHover}
              isMobile={isMobile}
              isTablet={isTablet}
            />
            <Menu searchHover={searchHover} setSearchHover={setSearchHover} />
            <SideList isMobile={isMobile} login={login} handleLogin={handleLogin} handleLogout={handleLogout} />
          </Nav>
        </Desktop>
      </Header>
    </div>
  );
};

export default GlobalNavBar;
