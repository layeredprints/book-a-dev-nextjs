import React from 'react';

import { Container, Content } from './styles';

interface Props {
  children: any;
  backgroundColor?: string;
}

const Section = (props: Props): JSX.Element => {
  const { children, backgroundColor } = props;

  return (
    <Container backgroundColor={backgroundColor}>
      <Content>{children}</Content>
    </Container>
  );
};

export default Section;
