import styled from 'styled-components';

export const Title = styled.h2`
  margin-top: 80px;

  color: #ed4b5e;

  text-align: center;
  font-family: 'Anzeigen Grotesk T';
  font-size: 36px;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.36px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-top: 80px;

    font-size: 48px;
    letter-spacing: -0.48px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 100px;

    font-size: 100px;
    letter-spacing: -1px;
  }
`;
