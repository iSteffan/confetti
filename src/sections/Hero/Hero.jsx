import { balloons1, balloons2 } from '../../assets/images';
import { Container, Text, Span, Balloon1, Balloon2 } from './Hero.styled';

export const Hero = () => {
  return (
    <section>
      <Container>
        <Text>
          Tworzymy unikalne <br />i niepowtarzalne <Span>dekoracje balonowe</Span> na imprezy
        </Text>
        <Balloon1 src={balloons1} alt="balloons" />
        <Balloon2 src={balloons2} alt="balloons" />
      </Container>
    </section>
  );
};
