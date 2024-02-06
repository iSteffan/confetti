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
          <Balloon1 src={BalloonsLeftSide} srcSet={`${BalloonsLeftSide} 2x`} alt="balloons" />
          <Balloon2 src={BalloonsRightSide} srcSet={`${BalloonsRightSide} 2x`} alt="balloons" />
        </BalloonsContainer>
      </Container>
    </section>
  );
};
