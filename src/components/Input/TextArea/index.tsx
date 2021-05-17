import React from 'react';
import { Field } from 'formik';

import InputEnum from 'src/enums/Input';

import { Container, Label } from './styles';

interface Props {
  name: string;
  isRequired: boolean;
  label?: string;
  placeholder?: string;
}

const TextAreaInput = (props: Props): JSX.Element => {
  const { name, isRequired, label, placeholder } = props;

  return (
    <Container>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Field
        type={InputEnum.Text}
        component="textarea"
        name={name}
        required={isRequired}
        placeholder={placeholder}
        rows="10"
      />
    </Container>
  );
};

export default TextAreaInput;
