import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
  background-color: #999;
  top: 110px;
  width: 90%;
  height: 900px;
  max-width: 1060px;
  max-height: 1000px;
  height: auto;
  position: relative;
  margin: 0 auto;
`;

const NotFound = () => {
  return (
    <Form>
      <div>홈</div>
    </Form>
  );
};

export default NotFound;
