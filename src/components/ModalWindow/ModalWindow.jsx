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
            <Link href="#header">główna</Link>
          </li>
          <li>
            <Link href="#about-us">O nas</Link>
          </li>
          <li>
            <Link href="#reviews">Recenzje</Link>
          </li>
          <li>
            <Link href="#contacts">Kontakty</Link>
          </li>
        </List>
      </ContentContainer>
    </Overlay>
  );
};
