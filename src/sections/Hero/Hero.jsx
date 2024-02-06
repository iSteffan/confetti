import { BalloonsLeftSide, BalloonsRightSide } from '../../assets/images';
import { Container, Title, Span, Balloon1, Balloon2, BalloonsContainer } from './Hero.styled';

export const Hero = () => {
  return (
    <section>
      <Container>
        <Title>
          Tworzymy unikalne <br />i niepowtarzalne <Span>dekoracje balonowe</Span> na imprezy
        </Title>
        <BalloonsContainer>
          <Balloon1 src={BalloonsLeftSide} alt="balloons" />
          <Balloon2 src={BalloonsRightSide} alt="balloons" />
        </BalloonsContainer>
      </Container>
    </section>
  );
};
