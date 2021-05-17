import React from 'react';
import { Field } from 'formik';

import { Container, Label } from './styles';

interface Props {
  name: string;
  isRequired: boolean;
  label?: string;
  options: any[];
}

const TextAreaInput = (props: Props): JSX.Element => {
  const { name, isRequired, label, options } = props;

  return (
    <Container>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Field component="select" name={name} required={isRequired}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
    </Container>
  );
};

export default TextAreaInput;
