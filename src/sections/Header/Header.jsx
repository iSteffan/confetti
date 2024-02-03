import { logo } from '../../assets/images';
import { HeaderTag, LogoImage, Container } from './Header.styled';
import { MenuBtn } from '../../components/MenuBtn/MenuBtn';

export const Header = () => {
  return (
    <HeaderTag>
      <Container>
        <LogoImage src={logo} alt="logo" />
        <MenuBtn />
      </Container>
    </HeaderTag>
  );
};
