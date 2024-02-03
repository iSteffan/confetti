import styled from 'styled-components';
import { HeroMobileBG, HeroDesktopBG, HeroTabletBG } from '../../assets/images';

export const Container = styled.div`
  margin-top: -62px;
  background-image: url(${HeroMobileBG});
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    margin-top: -63px;

    background-image: url(${HeroTabletBG});
  }

  @media screen and (min-width: 1280px) {
    margin-top: -69px;

    background-image: url(${HeroDesktopBG});
  }
`;

export const Text = styled.p`
  display: block;
  padding-top: 212px;
  padding-bottom: 234px;
  margin-left: auto;
  margin-right: auto;

  max-width: 319px;
  color: #ed4b5e;
  text-align: center;
  font-family: 'Anzeigen Grotesk T';
  font-size: 40px;
  line-height: normal;
  letter-spacing: -0.4px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    padding-top: 247px;
    padding-bottom: 327px;

    max-width: 484px;
    font-size: 64px;
    letter-spacing: -0.64px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 242px;
    padding-bottom: 342px;

    max-width: 771px;
    font-size: 88px;
    line-height: 90%;
    letter-spacing: -0.88px;
  }
`;

export const Span = styled.span`
  color: #222;
`;
