import { logo, logo2x } from '../../assets/images';
import { Container, FooterTag, LogoImage, Trademark } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterTag>
      <Container>
        <a href="./" aria-label="Link to home page">
          <LogoImage srcSet={`${logo} 1x, ${logo2x} 2x`} src={logo} alt="logo" />
        </a>
        <Trademark>
          confetti &copy;
          <time dateTime="2023" aria-label="Year 2023">
            2023
          </time>
        </Trademark>
      </Container>
    </FooterTag>
  );
};
