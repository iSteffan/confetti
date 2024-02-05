import styled, { keyframes } from 'styled-components';
import {
  HeroMobileBG,
  HeroDesktopBG,
  HeroTabletBG,
  HeroDesktopBalloons,
} from '../../assets/images';

const balloonAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  position: relative;
  margin-top: -62px;
  margin-left: auto;
  margin-right: auto;

  max-width: 480px;

  background-image: url(${HeroMobileBG});
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;

  outline: 1px solid gray;

  @media screen and (min-width: 768px) {
    margin-top: -63px;

    max-width: 768px;

    background-image: url(${HeroTabletBG});
  }

  @media screen and (min-width: 1280px) {
    margin-top: -69px;

    max-width: 1280px;

    background-image: url(${HeroDesktopBG});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: url(${HeroDesktopBalloons});
      background-size: 105%;
      background-repeat: no-repeat;
      background-position: 48% -10%;

      animation: ${balloonAnimation} 5s infinite;
    }
  }
`;

export const Title = styled.h1`
  position: relative;
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
  font-weight: 500;
  letter-spacing: -0.4px;
  text-transform: uppercase;
  z-index: 2;

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

    max-width: 720px;
    font-size: 88px;
    line-height: 90%;
    letter-spacing: -0.88px;
  }
`;

export const Span = styled.span`
  color: #222;
`;

export const Balloon1 = styled.img`
  position: absolute;
  top: 8%;
  right: 61%;

  width: 233px;
  height: auto;

  animation: ${balloonAnimation} 3s infinite;

  @media screen and (min-width: 768px) {
    top: 117px;
    right: 547px;
    width: 340px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const Balloon2 = styled.img`
  position: absolute;
  top: 49%;
  left: 55%;

  width: 222px;
  height: auto;

  animation: ${balloonAnimation} 3s infinite;

  @media screen and (min-width: 768px) {
    top: 382px;
    left: 464px;
    width: 380px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
