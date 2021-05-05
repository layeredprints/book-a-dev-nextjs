import React from 'react';

import { Container, Title, Description, Illustration } from './styles';

interface Props {
  firstName: string;
  lastName: string;
  description: string;
  image: string;
}

const Item = (props: Props): JSX.Element => {
  const { firstName, lastName, description, image } = props;

  return (
    <Container>
      <Illustration src={image} alt="team" />
      <Title>{`${firstName} ${lastName}`}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Item;
