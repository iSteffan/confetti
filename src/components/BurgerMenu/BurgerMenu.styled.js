import styled from 'styled-components';
import { ReactComponent as closeBurgerMenu } from '../../assets/icons/close-burger.svg';

export const ContentContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;

  width: 100%;
  max-width: 480px;
  text-align: center;

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

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 32px;
`;

export const Title = styled.p`
  color: #ed4b5e;

  font-family: 'Anzeigen Grotesk T';
  font-size: 36px;
  line-height: normal;
  letter-spacing: -0.36px;
  text-transform: uppercase;

  display: inline-block;
  height: 32px;
  margin-bottom: 12px;
`;

export const Btn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const CloseMenuIcon = styled(closeBurgerMenu)`
  stroke: #222222;

  width: 24px;
  height: 24px;

  transition: stroke 0.3s ease;

  ${Btn}:hover &,
  ${Btn}:focus & {
    stroke: #ed4b5e;
  }
`;

export const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  gap: 24px;

  margin-top: 62px;

  list-style: none;

  @media screen and (min-width: 768px) {
    gap: 36px;
    margin-top: 78px;
  }

  @media screen and (min-width: 1280px) {
    gap: 48px;
    margin-top: 100px;
  }
`;

export const Link = styled.a`
  color: #222;
  font-family: 'Anzeigen Grotesk T';
  font-size: 24px;
  line-height: normal;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    letter-spacing: -0.4px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    letter-spacing: -0.64px;
  }

  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: #ed4b5e;
  }
`;
