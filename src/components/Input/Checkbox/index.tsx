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

const CheckboxInput = (props: Props): JSX.Element => {
  const { name, value, isRequired, label, icon } = props;

  const { handleChange, values }: any = useFormikContext();
  const isChecked = values[name].includes(value);

  const handleToggleCheckbox = () => {
    if (!isChecked) {
      return handleChange({
        target: { name, value: [...values[name], value] },
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
    <Container onClick={handleToggleCheckbox} isChecked={isChecked}>
      {icon && <Image src={icon} />}
      {label && <Label htmlFor={name}>{label}</Label>}
      <Field
        type={InputEnum.Radio}
        name={name}
        value={value}
        required={isRequired}
        selected={isChecked}
      />
    </Container>
  );
};

export default CheckboxInput;
