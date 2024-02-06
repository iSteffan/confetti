import { logo } from '../../assets/images';
import { HeaderTag, LogoImage, Container } from './Header.styled';
import { MenuBtn } from '../../components/MenuBtn/MenuBtn';

export const Header = ({ toggleMenu }) => {
  return (
    <HeaderTag id="header">
      <Container>
        <LogoImage src={logo} alt="logo" />
        <MenuBtn onClick={toggleMenu} />
      </Container>
    </HeaderTag>
  );
};
