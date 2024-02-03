import styled from 'styled-components';

export const Main = styled.main`
  margin-left: auto;
  margin-right: auto;

  max-width: 480px;
  width: 100%;
  background-color: transparent;

  outline: 1px solid gray;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;
