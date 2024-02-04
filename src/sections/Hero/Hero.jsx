import { balloons1, balloons2 } from '../../assets/images';
import { Container, Title, Span, Balloon1, Balloon2 } from './Hero.styled';

export const Hero = () => {
  return (
    <section>
      <Container>
        <Title>
          Tworzymy unikalne <br />i niepowtarzalne <Span>dekoracje balonowe</Span> na imprezy
        </Title>
        <Balloon1 src={balloons1} alt="balloons" />
        <Balloon2 src={balloons2} alt="balloons" />
      </Container>
    </section>
  );
};
