import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormFormik,
  InputContainer,
  Field,
  Label,
  TextArea,
  Btn,
  ErrorMessage,
} from './Form.styled';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Wpisz imię')
    .matches(/^[a-zA-Z0-9]+$/, 'Nieprawidłowe Imię'),
  email: Yup.string()
    .required('Wpisz email')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Nieprawidłowy email'),
});

export const Form = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        message: '',
      }}
      validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        onSave({ ...values });
        actions.resetForm();
      }}
    >
      {({ touched, errors }) => (
        <FormFormik>
          <InputContainer>
            <Label htmlFor="name">Imię*</Label>
            <Field
              name="name"
              id="name"
              placeholder="Imię"
              autoComplete="on"
              style={{
                color: touched.name && errors.name ? '#ED4B5E' : '#222',
              }}
            />
            <ErrorMessage name="name" component="div" />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="email">E-mail*</Label>
            <Field
              name="email"
              id="email"
              placeholder="mail@gmail.com"
              autoComplete="on"
              style={{
                color: touched.email && errors.email ? '#ED4B5E' : '#222',
              }}
            />
            <ErrorMessage name="email" component="div" />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="message">Wiadomość</Label>
            <TextArea
              name="message"
              id="message"
              placeholder="Twoja wiadomość..."
              autoComplete="on"
              component="textarea"
            />
          </InputContainer>

          <Btn type="submit">Wyślij</Btn>
        </FormFormik>
      )}
    </Formik>
  );
};
