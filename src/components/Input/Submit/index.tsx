import React from 'react';

import InputEnum from 'src/enums/Input';

import { Container } from './styles';
import Button from 'src/components/Button';

interface Props {
  label?: string;
}

const SubmitInput = (props: Props): JSX.Element => {
  const { label } = props;

  return (
    <Container>
      <Button.Primary type={InputEnum.Submit}>
        {label ? label : 'Submit'}
      </Button.Primary>
    </Container>
  );
};

export default SubmitInput;
