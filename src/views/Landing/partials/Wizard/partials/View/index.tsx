import React from 'react';

import { Container } from './styles';

interface Props {
  children: JSX.Element;
}

const WizardView = (props: Props): JSX.Element => {
  const { children } = props;

  return <Container>{children}</Container>;
};

export default WizardView;
