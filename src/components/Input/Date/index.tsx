import React from 'react';
import { Field } from 'formik';

import InputEnum from 'src/enums/Input';

import { Container, Label } from './styles';

interface Props {
  name: string;
  isRequired: boolean;
  label?: string;
}

const DateInput = (props: Props): JSX.Element => {
  const { name, isRequired = false, label } = props;

  return (
    <Container>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Field
        type={InputEnum.Date}
        id={name}
        name={name}
        required={isRequired}
      />
    </Container>
  );
};

export default DateInput;
