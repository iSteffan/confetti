import { Form } from '../../components/Form/Form';
import {
  Title,
  Container,
  Text,
  Section,
  PhoneLink,
  PhoneIcon,
  EmailLink,
  EmailIcon,
} from './Contacts.styled';

export const Contacts = () => {
  const handleSubmit = data => {
    console.log(data);
  };

  return (
    <Section>
      <Container>
        <Title>Kontakty</Title>
        <Text>
          Confetti - Studio <br />
          Dekoracij Balonami  <br />
          Warszawa 
        </Text>
        <PhoneLink href="tel:+48793351407">
          <PhoneIcon />
          +48 793 351 407 
        </PhoneLink>
        <EmailLink href="mailto:confettibalony@gmail.com">
          <EmailIcon />
          confettibalony@gmail.com
        </EmailLink>
      </Container>
      <Form onSave={handleSubmit} />
    </Section>
  );
};
