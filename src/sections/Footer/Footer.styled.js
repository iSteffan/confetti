import styled from 'styled-components';

export const FooterTag = styled.footer`
  margin-top: 80px;

  @media screen and (min-width: 1280px) {
    margin-top: 100px;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 32px;
  display: flex;
  justify-content: space-between;

  max-width: 480px;
  width: 100%;
  border-top: 1px solid #ed4b5e;

  @media screen and (min-width: 768px) {
    padding-top: 24px;
    max-width: 708px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1216px;
  }
`;

export const LogoImage = styled.img`
  width: 104px;
  height: 32px;
`;

export const Trademark = styled.div`
  color: #222;

  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.16px;
`;
