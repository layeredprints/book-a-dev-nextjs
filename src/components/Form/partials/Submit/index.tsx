import React from 'react';

import { InputType } from 'src/types/Input';
import InputEnum from 'src/enums/Input';

import { Container } from './styles';
import Button from 'src/components/Button';

interface Props {
  input: InputType;
  label: string;
}

const SubmitInput = (props: Props): JSX.Element => {
  const { input, label } = props;
  const { value } = input;

  return (
    <Container>
      <Button.Primary type={InputEnum.Submit}>
        {label ? label : value}
      </Button.Primary>
    </Container>
  );
};

export default SubmitInput;
