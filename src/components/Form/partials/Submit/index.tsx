import React from 'react';

import { InputType } from 'src/types/Input';
import InputEnum from 'src/enums/Input';

import { Container } from './styles';
import Button from 'src/components/Button';

interface Props {
  input: InputType;
}

const SubmitInput = (props: Props): JSX.Element => {
  const { value } = props.input;

  return (
    <Container>
      <Button.Primary type={InputEnum.Submit}>{value}</Button.Primary>
    </Container>
  );
};

export default SubmitInput;
