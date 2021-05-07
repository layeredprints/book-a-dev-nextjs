import React from 'react';
import { Field } from 'formik';

import { InputType } from 'src/types/Input';
import InputEnum from 'src/enums/Input';

import { Container, Label } from './styles';

interface Props {
  input: InputType;
}

const CheckboxInput = (props: Props): JSX.Element => {
  const { input } = props;
  const { name, value, isRequired = false, label } = input;

  return (
    <Container>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Field
        type={InputEnum.Checkbox}
        name={name}
        value={value}
        required={isRequired}
      />
    </Container>
  );
};

export default CheckboxInput;
