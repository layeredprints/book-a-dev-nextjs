import React from 'react';

import { Container } from './styles';

interface Props {
  src: string;
  alt: string;
}

const Avatar = (props: Props): JSX.Element => {
  const { src, alt } = props;

  return (
    <Container>
      <img src={src} alt={alt} />
      <img src="assets/images/team-halo.png" />
    </Container>
  );
};

export default Avatar;
