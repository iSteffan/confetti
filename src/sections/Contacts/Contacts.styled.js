import styled from 'styled-components';
import { ReactComponent as Phone } from '../../assets/icons/call.svg';
import { ReactComponent as Sms } from '../../assets/icons/sms.svg';

export const Section = styled.section`
  margin-top: 80px;

  @media screen and (min-width: 1280px) {
    margin-top: 200px;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;

  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-left: 35px;

    max-width: 1216px;
  }
`;

export const Title = styled.h2`
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

    text-align: left;
    font-size: 100px;
    letter-spacing: -1px;
  }
`;

export const Text = styled.p`
  margin-bottom: 24px;

  text-align: center;
  font-family: 'Anzeigen Grotesk T';
  font-size: 28px;
  line-height: normal;
  letter-spacing: -0.28px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 120%;
    letter-spacing: -0.24px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;

    text-align: left;
    font-size: 40px;
    line-height: 95%;
    letter-spacing: -0.4px;
  }
`;

export const ContactInfoContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  max-width: 320px;

  @media screen and (min-width: 768px) {
    max-width: 380px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 0;
    margin-right: 0;

    text-align: left;
  }
`;

export const PhoneLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  margin-bottom: 16px;

  color: #565148;

  text-align: center;
  font-size: 20px;
  line-height: normal;
  letter-spacing: -0.2px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: #ed4b5e;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    letter-spacing: -0.24px;
  }

  @media screen and (min-width: 1280px) {
    color: #222;
  }
`;

export const PhoneIcon = styled(Phone)`
  stroke: #222222;

  width: 24px;
  height: 24px;

  transition: stroke 0.3s ease;

  ${PhoneLink}:hover &,
  ${PhoneLink}:focus & {
    stroke: #ed4b5e;
  }
`;

export const EmailLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: #565148;

  text-align: center;
  font-size: 20px;
  line-height: normal;
  letter-spacing: -0.2px;
  text-decoration: none;

  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: #ed4b5e;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    letter-spacing: -0.24px;
  }

  @media screen and (min-width: 1280px) {
    color: #222;
  }
`;

export const EmailIcon = styled(Sms)`
  stroke: #222222;

  width: 24px;
  height: 24px;

  transition: stroke 0.3s ease;

  ${EmailLink}:hover &,
  ${EmailLink}:focus & {
    stroke: #ed4b5e;
  }
`;

export const BalloonsContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-top: 36px;

  width: 100%;
  max-width: 480px;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    padding-top: 88px;

    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 0;
    margin-right: 0;
    padding-top: 0px;

    max-width: 608px;

    overflow-x: visible;
  }
`;

export const Balloons1 = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    position: absolute;
    top: 20px;
    left: 0px;

    width: 413px;
    height: 420px;

    transform: rotate(-9deg);
  }

  @media screen and (min-width: 1280px) {
    top: -87px;
    left: -140px;

    width: 461px;
    height: 469px;
  }
`;

export const Balloons2 = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;

    position: absolute;
    top: 271px;
    right: 0px;

    width: 344px;
    height: 350px;

    transform: rotate(9deg);
  }

  @media screen and (min-width: 1280px) {
    top: 190px;
    right: -93px;

    width: 384px;
    height: 391px;
  }
`;
