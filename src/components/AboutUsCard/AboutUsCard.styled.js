import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  width: 320px;
  height: 253px;

  color: #fff;
  border-radius: 24px;

  @media screen and (min-width: 768px) {
    padding: 48px;

    width: 596px;
    height: 287px;
  }

  @media screen and (min-width: 1280px) {
    height: 293px;
  }
`;

export const Title = styled.p`
  margin-bottom: 30px;

  font-family: 'Anzeigen Grotesk T';
  font-size: 24px;

  max-width: 206px;
  line-height: 120%;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  white-space: pre-wrap;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    max-width: 330px;

    font-size: 40px;
    line-height: normal;
    letter-spacing: -0.4px;
  }

  @media screen and (min-width: 1280px) {
    line-height: 95%;
    letter-spacing: -0.4px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 145%;
  letter-spacing: -0.16px;
  white-space: pre-wrap;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.2px;
  }

  @media screen and (min-width: 1280px) {
    line-height: 135%;
  }
`;
