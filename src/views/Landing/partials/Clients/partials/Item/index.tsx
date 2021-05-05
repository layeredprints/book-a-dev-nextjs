import React from 'react';

import { Container, Illustration } from './styles';

interface Props {
  image: string;
}

const Item = (props: Props): JSX.Element => {
  const { image } = props;

  return (
    <Container>
      <Illustration src={image} alt="client" />
    </Container>
  );
};

export default Item;
