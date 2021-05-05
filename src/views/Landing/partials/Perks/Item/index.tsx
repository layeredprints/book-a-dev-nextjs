import React from 'react';

import { Container, Title, Description, Illustration } from './styles';

interface Props {
  title: string;
  description: string;
  image: string;
}

const Item = (props: Props): JSX.Element => {
  const { title, description, image } = props;

  return (
    <Container>
      <Illustration src={image} alt="perk" />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Item;
