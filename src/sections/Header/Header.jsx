import { logo, logo2x } from '../../assets/images';
import { HeaderTag, LogoImage, Container } from './Header.styled';
import { MenuBtn } from '../../components/MenuBtn/MenuBtn';

export const Header = ({ toggleMenu }) => {
  return (
    <HeaderTag id="header">
      <Container>
        <a href="./" aria-label="Link to home page">
          <LogoImage srcSet={`${logo} 1x, ${logo2x} 2x`} src={logo} alt="logo" />
        </a>
        <MenuBtn onClick={toggleMenu} />
      </Container>
    </HeaderTag>
  );
};
