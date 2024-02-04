import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
