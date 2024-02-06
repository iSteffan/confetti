import {
  Overlay,
  ContentContainer,
  Btn,
  CloseMenuIcon,
  Title,
  Wrapper,
  List,
  Link,
} from './ModalWindow.styled';

export const ModalWindow = ({ toggleMenu }) => {
  return (
    <Overlay>
      <ContentContainer>
        <Wrapper>
          <Title>CONFETTI</Title>
          <Btn type="button" onClick={toggleMenu}>
            <CloseMenuIcon />
          </Btn>
        </Wrapper>
        <List>
          <li>
            <Link href="#header" onClick={toggleMenu}>
              główna
            </Link>
          </li>
          <li>
            <Link href="#about-us" onClick={toggleMenu}>
              O nas
            </Link>
          </li>
          <li>
            <Link href="#reviews" onClick={toggleMenu}>
              Recenzje
            </Link>
          </li>
          <li>
            <Link href="#contacts" onClick={toggleMenu}>
              Kontakty
            </Link>
          </li>
        </List>
      </ContentContainer>
    </Overlay>
  );
};
