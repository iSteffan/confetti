import { Container, AuthorContainer, Text, Icon, AuthorName } from './ReviewCard.styled';
import { userTag } from '../../assets/icons';

export const ReviewCard = ({ author, text }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <AuthorContainer>
        <Icon src={userTag} alt="user tag icon" />
        <AuthorName>{author}</AuthorName>
      </AuthorContainer>
    </Container>
  );
};
