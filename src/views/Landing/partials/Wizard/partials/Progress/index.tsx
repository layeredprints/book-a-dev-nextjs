import React from 'react';

import { Container, Indicator } from './styles';

interface Props {
  setup: any;
  stepIndex: number;
}

const WizardProgress = (props: Props): JSX.Element => {
  const { setup, stepIndex } = props;

  return (
    <Container>
      {setup.options.map((_option: any, index: number) => (
        <Indicator key={index} isCompleted={index < stepIndex + 1} />
      ))}
    </Container>
  );
};

export default WizardProgress;
