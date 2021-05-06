import React from 'react';

import { Container, Content } from './styles';

interface Props {
  children: any;
  backgroundColor?: string;
  sectionRef?: any;
}

const Section = (props: Props): JSX.Element => {
  const { children, backgroundColor, sectionRef } = props;

  return (
    <Container backgroundColor={backgroundColor} ref={sectionRef}>
      <Content>{children}</Content>
    </Container>
  );
};

export default Section;
