import {
  ContentContainer,
  Btn,
  CloseMenuIcon,
  Title,
  Wrapper,
  List,
  Link,
} from './BurgerMenu.styled';

export const BurgerMenu = ({ onClose }) => {
  return (
    <ContentContainer>
      <Wrapper>
        <Title>CONFETTI</Title>
        <Btn type="button" onClick={onClose} aria-label="Close menu button">
          <CloseMenuIcon aria-label="Close menu icon" />
        </Btn>
      </Wrapper>
      <List>
        <li>
          <Link href="#header" onClick={onClose} aria-label="Move to main section">
            główna
          </Link>
        </li>
        <li>
          <Link href="#about-us" onClick={onClose} aria-label="Move to about-us section">
            O nas
          </Link>
        </li>
        <li>
          <Link href="#reviews" onClick={onClose} aria-label="Move to reviews section">
            Recenzje
          </Link>
        </li>
        <li>
          <Link href="#contacts" onClick={onClose} aria-label="Move to contacts section">
            Kontakty
          </Link>
        </li>
      </List>
    </ContentContainer>
  );
};
