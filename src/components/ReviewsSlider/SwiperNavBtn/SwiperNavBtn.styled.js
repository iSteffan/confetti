import styled from 'styled-components';
import { ReactComponent as slideLeft } from '../../../assets/icons/slide-left.svg';
import { ReactComponent as slideRight } from '../../../assets/icons/slide-right.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;

  margin-top: 48px;
  margin-left: auto;
  margin-right: auto;
`;

export const Btn = styled.button`
  background-color: transparent;
  border: none;
`;

export const SlideLeftIcon = styled(slideLeft)`
  fill: white;
  width: 56px;
  height: 56px;

  transition: fill 0.3s ease, stroke 0.3s ease;

  ${Btn}:hover &,
  ${Btn}:focus & {
    fill: #ffeff0;
  }
`;

export const SlideRightIcon = styled(slideRight)`
  fill: white;
  width: 56px;
  height: 56px;

  transition: fill 0.3s ease, stroke 0.3s ease;

  ${Btn}:hover &,
  ${Btn}:focus & {
    fill: #ffeff0;
  }
`;
