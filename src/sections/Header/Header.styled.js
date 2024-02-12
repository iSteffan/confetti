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

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-left: 30px;
    padding-right: 30px;

    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 37px;
    padding-left: 112px;
    padding-right: 112px;

    max-width: 1280px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImage = styled.img`
  position: relative;

  width: 104px;
  height: 32px;

  z-index: 12;
`;

export const Title = styled.p`
  color: #ed4b5e;

  font-family: 'Anzeigen Grotesk T';
  font-size: 36px;
  line-height: normal;
  letter-spacing: -0.36px;
  text-transform: uppercase;
`;

export const Btn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
