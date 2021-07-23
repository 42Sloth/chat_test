import React from 'react';
import styled, { css } from 'styled-components';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

interface Me {
  searchHover: boolean;
  setSearchHover: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Pre {
  searchHover: boolean;
}

const Presentation = styled.div`
  background-color: #345239;
  top: 50px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
  box-sizing: border-box;
  height: 0;

  ${(props: Pre) =>
    props.searchHover &&
    css`
      height: auto;
      transition: 0.5s;
    `}
`;

const Overlay = styled.div`
  height: 100%;
  position: relative;
  max-height: 400px;
  background-color: #fff;
  transition: 0.5s;
  display: block;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1060px;
  padding: 0;
  width: 90%;
  box-sizing: border-box;
  height: 100%;
  display: block;
  &::before {
    content: ' ';
    display: table;
    box-sizing: border-box;
  }
`;

const Row = styled.div`
  margin-right: -20px;
  margin: 0;
  box-sizing: border-box;
  height: 100%;
`;

const Cell = styled.div`
  float: left;
  width: 16.666%;
  height: 270px;
  padding: 40px 20px 0 0;
  text-align: left;
  display: block;
  box-sizing: border-box;
`;

const ATag = styled.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 14px;
  box-sizing: border-box;
`;

const H2 = styled.h2`
  position: relative;
  margin: 0;
  font-size: 17px;
  color: #333;
  line-height: 20px;
  vertical-align: top;
  padding-right: 20px;
  padding-bottom: 15px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  cursor: pointer;
  box-sizing: border-box;
`;

const H3 = styled.h3`
  position: relative;
  margin: 0;
  font-size: 13px;
  color: #999;
  padding: 5px 20px 5px 0%;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  cursor: pointer;
  line-height: 1.1;
  box-sizing: border-box;
`;
const Icon = styled.i`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 20px;
  color: #999;
  font-family: 'icomoon' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Menu = ({ searchHover, setSearchHover }: Me) => {
  const leaveMenu = () => {
    if (searchHover === true) {
      setSearchHover(false);
    }
  };

  return (
    <Presentation className="presentation" searchHover={searchHover}>
      <Overlay onMouseLeave={leaveMenu} className="overlay">
        <Container className="container">
          <Row>
            <Cell>
              <ATag>
                <H2>
                  영업
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H2>
              </ATag>
              <ATag>
                <H3>기업영업</H3>
              </ATag>
              <ATag>
                <H3>외부영업</H3>
              </ATag>
              <ATag>
                <H3>영업 관리자</H3>
              </ATag>
              <ATag>
                <H3>기술영업</H3>
              </ATag>
              <ATag>
                <H3>주요고객사 담당자</H3>
              </ATag>
              <ATag>
                <H3>솔루션 컨설턴드</H3>
              </ATag>
              <ATag>
                <H3>해외영업</H3>
              </ATag>
              <ATag>
                <H3>
                  더보기
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H3>
              </ATag>
            </Cell>
            <Cell>
              <ATag>
                <H2>
                  미디어
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H2>
              </ATag>
              <ATag>
                <H3>콘텐츠 크리에이터</H3>
              </ATag>
              <ATag>
                <H3>PD</H3>
              </ATag>
              <ATag>
                <H3>영상 편집가</H3>
              </ATag>
              <ATag>
                <H3>에디터</H3>
              </ATag>
              <ATag>
                <H3>비디오 제작</H3>
              </ATag>
              <ATag>
                <H3>작가</H3>
              </ATag>
              <ATag>
                <H3>출판 기획자</H3>
              </ATag>
              <ATag>
                <H3>
                  더보기
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H3>
              </ATag>
            </Cell>
            <Cell>
              <ATag>
                <H2>
                  인사
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H2>
              </ATag>
              <ATag>
                <H3>인사담당</H3>
              </ATag>
              <ATag>
                <H3>리크루터</H3>
              </ATag>
              <ATag>
                <H3>조직문화</H3>
              </ATag>
              <ATag>
                <H3>평가 보상</H3>
              </ATag>
              <ATag>
                <H3>헤드헌터</H3>
              </ATag>
              <ATag>
                <H3>HRBP</H3>
              </ATag>
              <ATag>
                <H3>급여담당</H3>
              </ATag>
              <ATag>
                <H3>
                  더보기
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H3>
              </ATag>
            </Cell>
            <Cell>
              <ATag>
                <H2>
                  게임 제작
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H2>
              </ATag>
              <ATag>
                <H3>게임 기획자</H3>
              </ATag>
              <ATag>
                <H3>게임 그래픽 디자이너</H3>
              </ATag>
              <ATag>
                <H3>모바일 게임 개발자</H3>
              </ATag>
              <ATag>
                <H3>게임 아티스트</H3>
              </ATag>
              <ATag>
                <H3>게임 클라이언트 개발자</H3>
              </ATag>
              <ATag>
                <H3>게임 서버 개발자</H3>
              </ATag>
              <ATag>
                <H3>유니티 개발자</H3>
              </ATag>
              <ATag>
                <H3>
                  더보기
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H3>
              </ATag>
            </Cell>
            <Cell>
              <ATag>
                <H2>
                  금융
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H2>
              </ATag>
              <ATag>
                <H3>회계담당</H3>
              </ATag>
              <ATag>
                <H3>재무 담당자</H3>
              </ATag>
              <ATag>
                <H3>IR</H3>
              </ATag>
              <ATag>
                <H3>투자·증권</H3>
              </ATag>
              <ATag>
                <H3>재무 분석가</H3>
              </ATag>
              <ATag>
                <H3>애널리스트</H3>
              </ATag>
              <ATag>
                <H3>내부통제 담당자</H3>
              </ATag>
              <ATag>
                <H3>
                  더보기
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H3>
              </ATag>
            </Cell>
            <Cell>
              <ATag>
                <H2>
                  엔지니어링·설계
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H2>
              </ATag>
              <ATag>
                <H2>
                  제조·생산
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H2>
              </ATag>
              <ATag>
                <H2>
                  물류·무역
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H2>
              </ATag>
              <ATag>
                <H2>
                  의료·제약·바이오
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H2>
              </ATag>
              <ATag>
                <H2>
                  교육
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H2>
              </ATag>
              <ATag>
                <H2>
                  법률·법집행기관
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H2>
              </ATag>
              <ATag>
                <H2>
                  식·음료
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H2>
              </ATag>
              <ATag>
                <H2>
                  건설·시설
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H2>
              </ATag>
              <ATag>
                <H2>
                  공공·복지
                  <Icon>
                    <KeyboardArrowRightIcon />
                  </Icon>
                </H2>
              </ATag>
            </Cell>
          </Row>
        </Container>
      </Overlay>
    </Presentation>
  );
};

export default Menu;
