import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 320px;
  height: 229px;
  background: #ffeff0;
  border-radius: 24px;

  @media screen and (min-width: 768px) {
    padding: 48px;

    width: 346px;
    height: 220px;
  }

  @media screen and (min-width: 1280px) {
    padding: 36px 24px;

    width: 388px;
    height: 277px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 130%;
  letter-spacing: -0.18px;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.24px;
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const AuthorName = styled.p`
  color: #565148;

  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.16px;

  @media screen and (min-width: 1280px) {
    color: #222;
  }
`;
