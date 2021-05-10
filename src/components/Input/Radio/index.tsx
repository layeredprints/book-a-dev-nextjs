import React from 'react';
import { Field, useFormikContext } from 'formik';

import InputEnum from 'src/enums/Input';

import { Container, Label, Image } from './styles';

interface Props {
  name: string;
  value: string;
  isRequired: boolean;
  label?: string;
  icon?: string;
}

const RadioInput = (props: Props): JSX.Element => {
  const { name, value, isRequired, label, icon } = props;

  const { handleChange, values }: any = useFormikContext();
  const isSelected = values[name] === value;

  const handleToggleCheckbox = () => {
    if (!isSelected) {
      return handleChange({
        target: { name, value },
      });
    }

    handleChange({
      target: {
        name,
        value: values[name].filter((_name: string) => _name !== value),
      },
    });
  };

  return (
    <Container onClick={handleToggleCheckbox} isSelected={isSelected}>
      {icon && <Image src={icon} />}
      {label && <Label htmlFor={name}>{label}</Label>}
      <Field
        type={InputEnum.Radio}
        name={name}
        value={value}
        required={isRequired}
        checked={isSelected}
      />
    </Container>
  );
};

export default RadioInput;
