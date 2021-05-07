import React from 'react';
import { Field } from 'formik';

import { InputType } from 'src/types/Input';
import InputEnum from 'src/enums/Input';

import { Container, Label } from './styles';

interface Props {
  input: InputType;
}

const EmailInput = (props: Props): JSX.Element => {
  const { input } = props;
  const { name, isRequired = false, label, placeholder } = input;

  return (
    <Container>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Field
        type={InputEnum.Email}
        id={name}
        name={name}
        required={isRequired}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default EmailInput;
