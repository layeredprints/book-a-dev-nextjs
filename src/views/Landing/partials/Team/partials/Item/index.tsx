import React from 'react';

import { Container, Title, Illustration, List, ListItem } from './styles';

interface Props {
  firstName: string;
  lastName: string;
  skills: string[];
  image: string;
}

const Item = (props: Props): JSX.Element => {
  const { firstName, lastName, skills, image } = props;

  return (
    <Container>
      <Illustration src={image} alt="team" />
      <Title>{`${firstName} ${lastName}`}</Title>
      <List>
        {skills &&
          skills.map((skill: string, index: number) => (
            <ListItem key={index}>{skill}</ListItem>
          ))}
      </List>
    </Container>
  );
};

export default Item;
