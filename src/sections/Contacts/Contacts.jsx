import {
  BalloonsLeftSide,
  BalloonsLeftSide2x,
  BalloonsRightSide,
  BalloonsRightSide2x,
} from '../../assets/images';
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
  Balloons1,
  Balloons2,
  BalloonsContainer,
  ContactInfoContainer,
} from './Contacts.styled';

export const Contacts = () => {
  const handleSubmit = data => {
    console.log(data);
  };

  return (
    <Section id="contacts">
      <Container>
        <ContactInfoContainer>
          <Title>Kontakty</Title>
          <Text>
            Confetti - Studio <br />
            Dekoracij Balonami  <br />
            Warszawa 
          </Text>
          <PhoneLink href="tel:+48793351407" aria-label="Make a call">
            <PhoneIcon />
            +48 793 351 407 
          </PhoneLink>
          <EmailLink href="mailto:confettibalony@gmail.com" aria-label="Send email">
            <EmailIcon />
            confettibalony@gmail.com
          </EmailLink>
        </ContactInfoContainer>

        <BalloonsContainer>
          <Balloons1
            src={BalloonsLeftSide}
            srcSet={`${BalloonsLeftSide} 1x, ${BalloonsLeftSide2x} 2x`}
            alt="balloons"
          />
          <Balloons2
            src={BalloonsRightSide}
            srcSet={`${BalloonsRightSide} 1x, ${BalloonsRightSide2x} 2x`}
            alt="balloons"
          />

          <Form onSave={handleSubmit} />
        </BalloonsContainer>
      </Container>
    </Section>
  );
};
