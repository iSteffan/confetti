import { logo } from '../../assets/images';
import { HeaderTag, LogoImage, Container } from './Header.styled';
import { MenuBtn } from './MenuBtn/MenuBtn';

export const Header = () => {
  return (
    <HeaderTag>
      <Container>
        <LogoImage src={logo} />
        <MenuBtn />
      </Container>
    </HeaderTag>
  );
};
