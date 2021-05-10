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

const PasswordInput = (props: Props): JSX.Element => {
  const { name, isRequired, label, placeholder } = props;

  return (
    <Container>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Field
        type={InputEnum.Password}
        id={name}
        name={name}
        required={isRequired}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default PasswordInput;
