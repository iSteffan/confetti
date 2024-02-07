import {
  BalloonsLeftSide,
  BalloonsLeftSide2x,
  BalloonsRightSide,
  BalloonsRightSide2x,
} from '../../assets/images';
import { Container, Title, Span, Balloon1, Balloon2, BalloonsContainer } from './Hero.styled';

export const Hero = () => {
  return (
    <section>
      <Container>
        <Title>
          Tworzymy unikalne <br />i niepowtarzalne <Span>dekoracje balonowe</Span> na imprezy
        </Title>
        <BalloonsContainer>
          <Balloon1
            src={BalloonsLeftSide}
            srcSet={`${BalloonsLeftSide} 1x, ${BalloonsLeftSide2x} 2x`}
            alt="balloons"
          />
          <Balloon2
            src={BalloonsRightSide}
            srcSet={`${BalloonsRightSide} 1x, ${BalloonsRightSide2x} 2x`}
            alt="balloons"
          />
        </BalloonsContainer>
      </Container>
    </section>
  );
};
