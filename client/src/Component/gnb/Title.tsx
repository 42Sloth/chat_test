import React from 'react';
import styled from 'styled-components';

interface Ti {
  isMobile: boolean;
  handleLogin: () => void;
}

const Container = styled.div`
  margin: auto 0;

  @media (max-width: 767px) {
    width: 100%;
    padding: 15px 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    height: 100%;
  }
`;

const Logo = styled.span`
  font-size: 20px;
  font-weight: bold;
  border-color: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #333;
`;

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

const Title = ({ isMobile, handleLogin }: Ti) => {
  return (
    <Container>
      <a href="/" style={{ textDecoration: 'none' }}>
        <Logo>42 Sloth</Logo>
      </a>
      {isMobile && (
        <a href="/">
          <SignupButton onClick={handleLogin}>login</SignupButton>
        </a>
      )}
    </Container>
  );
};

export default Title;
