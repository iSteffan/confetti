import styled from 'styled-components';

export const HeaderTag = styled.header`
  position: relative;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  max-width: 480px;
  width: 100%;
  background-color: transparent;

  outline: 1px solid gray;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImage = styled.img`
  width: 104px;
  height: 32px;
`;
