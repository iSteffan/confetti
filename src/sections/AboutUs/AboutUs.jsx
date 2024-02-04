import { Title, Text, Container } from './AboutUs.styled';
import { AboutUsCardList } from '../../components/AboutUsCardList/AboutUsCardList';
import { AboutUsSlider } from '../../components/AboutUsSlider/AboutUsSlider';

export const AboutUs = () => {
  return (
    <section>
      <Container>
        <Title>Kreatywny zespół dekoratorów</Title>
        <Text>
          Młodzi i energiczni, rozwijający działalność w zakresie tworzenia dekoracji na imprezy i
          wydarzenia
        </Text>
        {/* <AboutUsCardList /> */}
        <AboutUsSlider />
      </Container>
    </section>
  );
};
