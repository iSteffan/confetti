import { logo, logo2x } from '../../assets/images';

import { HeaderTag, LogoImage, Container } from './Header.styled';
import { MenuBtn } from '../../components/MenuBtn/MenuBtn';

export const Header = ({ toggleMenu }) => {
  return (
    <HeaderTag id="header">
      <Container>
        <LogoImage srcSet={`${logo2x} 2x`} src={logo} alt="logo" />
        <MenuBtn onClick={toggleMenu} />
      </Container>
    </HeaderTag>
  );
};
