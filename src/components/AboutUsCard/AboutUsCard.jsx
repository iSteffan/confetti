import { Container, Title, Text } from './AboutUsCard.styled';

export const AboutUsCard = ({ title, text, color }) => {
  return (
    <Container style={{ backgroundColor: color }}>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};
