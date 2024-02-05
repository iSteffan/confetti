import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikInput,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const FormFormik = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-left: auto;
  margin-right: auto;
  padding: 51px 20px;

  max-width: 480px;
  background: #ffeff0;

  @media screen and (min-width: 768px) {
    gap: 32px;

    padding: 57px 83px 56px 82px;

    max-width: 608px;
    border-radius: 24px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 8px;
  margin-left: 24px;

  color: #949494;

  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.16px;
`;

export const Field = styled(FormikInput)`
  padding: 20px 24px;

  width: 100%;

  color: #222;
  font-size: 20px;
  letter-spacing: -0.2px;
  border-radius: 9px;
  border: 1px solid #d2d2d2;

  background: #fff;

  &::placeholder {
    color: #888;

    font-size: 18px;
    line-height: normal;
    letter-spacing: -0.18px;
  }
`;

// export const TextArea = styled.textarea`
//   padding: 20px 24px;

//   width: 100%;
//   height: 128px;
//   color: #222;
//   font-size: 20px;
//   letter-spacing: -0.2px;
//   border-radius: 9px;
//   border: 1px solid #d2d2d2;
//   background: #fff;
//   resize: none;

//   @media (min-width: 768px) {
//     height: 136px;
//   }

//   &::placeholder {
//     color: #888;

//     font-size: 18px;
//     line-height: normal;
//     letter-spacing: -0.18px;
//   }
// `;

export const TextArea = styled(FormikInput)`
  padding: 20px 24px;

  width: 100%;
  height: 128px;
  color: #222;
  font-size: 20px;
  letter-spacing: -0.2px;
  border-radius: 9px;
  border: 1px solid #d2d2d2;
  background: #fff;
  resize: none;

  @media (min-width: 768px) {
    height: 136px;
  }

  &::placeholder {
    color: #888;

    font-size: 18px;
    line-height: normal;
    letter-spacing: -0.18px;
  }
`;

export const Btn = styled.button`
  padding: 20px 32px;

  width: 100%;
  color: #fff;
  text-align: center;
  font-family: 'Anzeigen Grotesk T';
  font-size: 28px;
  line-height: normal;
  letter-spacing: -0.28px;
  text-transform: uppercase;
  border-radius: 24px;
  background: #ed4b5e;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 24px 32px;

    max-width: 768px;
    font-size: 40px;
    letter-spacing: -0.4px;
  }

  transition: background 0.3s ease;

  &:hover,
  &:focus {
    background: #ed4b5ebf;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  position: absolute;
  bottom: -24px;
  right: 24px;

  color: #ed4b5e;

  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.14px;
`;
