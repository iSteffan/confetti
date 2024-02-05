import { Title, Text, Container } from './AboutUs.styled';
import { AboutUsCardList } from '../../components/AboutUsCardList/AboutUsCardList';
import { AboutUsSlider } from '../../components/AboutUsSlider/AboutUsSlider';
import { useMediaQuery } from 'react-responsive';

export const AboutUs = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section>
      <Container>
        <Title>Kreatywny zespół dekoratorów</Title>
        <Text>
          Młodzi i energiczni, rozwijający działalność w zakresie tworzenia dekoracji na imprezy i
          wydarzenia
        </Text>
        {isMobile ? <AboutUsSlider /> : <AboutUsCardList />}
      </Container>
    </section>
  );
};
