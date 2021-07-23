import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

interface Mo {
  closeModal: any;
  login: boolean;
  handleLogin: any;
  handleLogout: any;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin-top: 0;
  padding: 0 !important;
  display: block;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  height: 100%;
`;

const Main = styled.div`
  box-shadow: none;
  border: 1px solid #e1e2e3;
  border-radius: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
  min-width: 194px;
  background-color: #fff;
  box-sizing: border-box;
  margin: 0;
  display: block;
`;

const Head = styled.div`
  display: block;
  height: 50px;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-size: 20px;
`;

const Icon = styled.i`
  display: inline-block;
  font-size: 24px;
  line-height: 1;
  padding: 0;
  margin: 13px 0;
  box-sizing: border-box;
`;

const CloseButton = styled.button`
  float: right;
  color: #999;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  box-shadow: none !important;
  cursor: pointer;
  height: 100%;
  box-sizing: border-box;
`;

const Ul = styled.ul`
  margin: 45px 0 15px;
  list-style: none;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  height: 100%;
`;

const ATag = styled.ul`
  padding: 15px 0;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  position: relative;
  display: block;
  width: 100%;
  color: #333;
  text-decoration: none;
  cursor: pointer;
`;

const Modal = ({ closeModal, login, handleLogin, handleLogout }: Mo) => {
  const clickLogout = () => {
    closeModal();
    handleLogout();
  };
  return (
    <div>
      <Container>
        <Main>
          <Head>
            <Icon>
              <span>wanted</span>
            </Icon>
            <CloseButton>
              <CloseIcon onClick={closeModal} />
            </CloseButton>
          </Head>
          <Ul>
            {!login && (
              <li
                style={{
                  width: '100%',
                  height: 'auto',
                  margin: '0',
                  border: '0',
                  padding: '0',
                  boxSizing: 'border-box',
                  fontSize: '14px',
                }}
              >
                <button
                  style={{
                    display: 'block',
                    width: '100%',
                    color: '#333',
                    padding: '15px 0',
                    fontSize: '20px',
                    lineHeight: '1',
                    textAlign: 'left',
                    margin: '0',
                    border: '0',
                    cursor: 'pointer',
                    background: 'none',
                    boxSizing: 'border-box',
                  }}
                  onClick={handleLogin}
                >
                  로그인
                </button>
              </li>
            )}
            <li
              style={{
                width: '100%',
                height: 'auto',
                paddingTop: '15px',
                borderTop: '1px solid #eee',
                marginTop: '15px',
                padding: '0',
                boxSizing: 'border-box',
              }}
            >
              <ATag>이력서</ATag>
            </li>
            <li
              style={{
                width: '100%',
                height: 'auto',
                margin: '0',
                border: '0',
                padding: '0',
                boxSizing: 'border-box',
              }}
            >
              <ATag
                style={{
                  padding: '15px 0',
                  fontSize: '20px',
                  lineHeight: '1',
                  position: 'relative',
                  display: 'block',
                  width: '100%',
                  color: '#333',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                매치업
              </ATag>
            </li>
            <li
              style={{
                width: '100%',
                height: 'auto',
                margin: '0',
                border: '0',
                padding: '0',
                boxSizing: 'border-box',
              }}
            >
              <ATag>추천</ATag>
            </li>
            <li
              style={{
                width: '100%',
                height: 'auto',
                margin: '0',
                border: '0',
                padding: '0',
                boxSizing: 'border-box',
              }}
            >
              <ATag>프리랜서</ATag>
            </li>
            <li
              style={{
                width: '100%',
                height: 'auto',
                paddingTop: '15px',
                borderTop: '1px solid #eee',
                marginTop: '15px',
                padding: '0',
                boxSizing: 'border-box',
              }}
            >
              <ATag>직군별 연봉</ATag>
            </li>
            <li
              style={{
                width: '100%',
                height: 'auto',
                margin: '0',
                border: '0',
                padding: '0',
                boxSizing: 'border-box',
              }}
            >
              <ATag>커리어 성장</ATag>
            </li>
            <li
              style={{
                width: '100%',
                height: 'auto',
                paddingTop: '15px',
                borderTop: '1px solid #eee',
                marginTop: '15px',
                padding: '0',
                boxSizing: 'border-box',
              }}
            >
              <ATag>기업 서비스</ATag>
            </li>
            <li
              style={{
                width: '100%',
                height: 'auto',
                margin: '0',
                border: '0',
                padding: '0',
                boxSizing: 'border-box',
              }}
            >
              {login && (
                <ATag style={{ color: '#999' }} onClick={clickLogout}>
                  로그아웃
                </ATag>
              )}
            </li>
          </Ul>
        </Main>
      </Container>
    </div>
  );
};

export default Modal;
