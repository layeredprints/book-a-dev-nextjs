import React from 'react';

import { Container } from './styles';

interface Props {
  flow: any;
}

const WizardProgress = (props: Props): JSX.Element => {
  const { flow } = props;

  console.log({ flow });

  return <Container></Container>;
};

export default WizardProgress;
