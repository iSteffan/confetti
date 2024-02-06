import styled, { keyframes } from 'styled-components';
import {
  HeroMobileBG,
  HeroDesktopBG,
  HeroTabletBG,
  HeroDesktopBalloons,
  HeroMobileBG2x,
  HeroTabletBG2x,
  HeroDesktopBG2x,
  HeroDesktopBalloons2x,
} from '../../assets/images';

const balloonDesktopAnimation = keyframes`
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

const balloon1Animation = keyframes`
  0% {
    transform: scale(1) rotate(25deg);
  }
  50% {
    transform: scale(1.03) rotate(25deg);
  }
  100% {
    transform: scale(1) rotate(25deg);
  }
`;

const balloon2Animation = keyframes`
  0% {
    transform: scale(1) rotate(16deg);
  }
  50% {
    transform: scale(1.03) rotate(16deg);
  }
  100% {
    transform: scale(1) rotate(16deg);
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

  @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image: url(${HeroMobileBG2x});
  }

  @media screen and (min-width: 768px) {
    margin-top: -63px;

    max-width: 768px;

    background-image: url(${HeroTabletBG});

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${HeroTabletBG2x});
    }
  }

  @media screen and (min-width: 1280px) {
    margin-top: -69px;

    max-width: 1280px;

    background-image: url(${HeroDesktopBG});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${HeroDesktopBG2x});
    }

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

      animation: ${balloonDesktopAnimation} 5s infinite;

      @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
        background-image: url(${HeroDesktopBalloons2x});
      }
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

export const BalloonsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  margin-left: auto;
  margin-right: auto;

  width: 360px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const Span = styled.span`
  color: #222;
`;

export const Balloon1 = styled.img`
  position: absolute;
  top: 85px;
  left: -56px;

  width: 155px;
  height: 158px;

  transform: rotate(25deg);

  animation: ${balloon1Animation} 3s infinite;

  @media screen and (min-width: 768px) {
    top: 142px;
    left: -80px;

    width: 273px;
    height: 278px;
  }
`;

export const Balloon2 = styled.img`
  position: absolute;
  top: 323px;

  right: -33px;

  width: 178px;
  height: 181px;

  transform: rotate(16deg);

  animation: ${balloon2Animation} 3s infinite;

  @media screen and (min-width: 768px) {
    top: 415px;
    right: -37px;

    width: 306px;
    height: 312px;
  }
`;
