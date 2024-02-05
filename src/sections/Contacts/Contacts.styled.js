import styled from 'styled-components';

// export const Container = styled.div`
//   margin-left: auto;
//   margin-right: auto;

//   max-width: 320px;

//   @media screen and (min-width: 768px) {
//     max-width: 708px;
//   }

//   @media screen and (min-width: 1280px) {
//     max-width: 1216px;
//   }
// `;

export const Title = styled.h2`
  margin-top: 80px;
  margin-bottom: 36px;

  color: #ed4b5e;
  text-align: center;

  font-family: 'Anzeigen Grotesk T';
  font-size: 36px;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.36px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;

    font-size: 48px;
    letter-spacing: -0.48px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 0px;
    margin-bottom: 56px;

    font-size: 100px;
    letter-spacing: -1px;
  }
`;
