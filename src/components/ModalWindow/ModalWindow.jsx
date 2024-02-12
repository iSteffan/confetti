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
          <Btn type="button" onClick={toggleMenu} aria-label="Close menu button">
            <CloseMenuIcon aria-label="Close menu icon" />
          </Btn>
        </Wrapper>
        <List>
          <li>
            <Link href="#header" onClick={toggleMenu} aria-label="Move to main section">
              główna
            </Link>
          </li>
          <li>
            <Link href="#about-us" onClick={toggleMenu} aria-label="Move to about-us section">
              O nas
            </Link>
          </li>
          <li>
            <Link href="#reviews" onClick={toggleMenu} aria-label="Move to reviews section">
              Recenzje
            </Link>
          </li>
          <li>
            <Link href="#contacts" onClick={toggleMenu} aria-label="Move to contacts section">
              Kontakty
            </Link>
          </li>
        </List>
      </ContentContainer>
    </Overlay>
  );
};
