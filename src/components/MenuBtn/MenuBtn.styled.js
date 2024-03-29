import styled from 'styled-components';
import { ReactComponent as burgerMenu } from '../../assets/icons/burger-menu.svg';

export const Btn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  width: 77px;
  height: 24px;
  font-family: 'Anzeigen Grotesk T';
  font-size: 24px;
  line-height: 90%;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 12;

  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: #ed4b5e;
  }
`;

export const MenuIcon = styled(burgerMenu)`
  position: fixed;
  margin-left: 53px;

  fill: #222222;
  stroke: #222222;

  width: 24px;
  height: 24px;

  transition: fill 0.3s ease, stroke 0.3s ease;

  ${Btn}:hover &,
  ${Btn}:focus & {
    fill: #ed4b5e;
    stroke: #ed4b5e;
  }
`;
