import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  max-width: 320px;

  @media screen and (min-width: 768px) {
    max-width: 596px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1216px;
  }
`;

export const Title = styled.h2`
  /* margin-left: auto;
  margin-right: auto;

  max-width: 320px; */
  text-align: center;
  font-family: 'Anzeigen Grotesk T';
  font-size: 36px;
  line-height: normal;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    /* max-width: 584px; */

    font-size: 48px;
    letter-spacing: -0.48px;
  }

  @media screen and (min-width: 1280px) {
    /* max-width: 700px; */

    font-size: 56px;
    letter-spacing: -0.56px;
  }
`;

export const Text = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 36px;
  margin-top: 16px;

  color: #565148;
  text-align: center;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.2px;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;

    max-width: 584px;

    font-size: 24px;
    letter-spacing: -0.24px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 64px;
    margin-top: 24px;

    max-width: 700px;

    color: #222;
  }
`;
