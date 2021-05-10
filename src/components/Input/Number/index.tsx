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

const NumberInput = (props: Props): JSX.Element => {
  const { name, isRequired = false, label, placeholder } = props;

  return (
    <Container>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Field
        type={InputEnum.Number}
        id={name}
        name={name}
        required={isRequired}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default NumberInput;
