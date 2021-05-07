import React from 'react';

import { Container } from './styles';

interface Props {
  children: any;
  onClick?: () => void;
  type?: any;
}

const PrimaryButton = React.forwardRef((props: Props, ref: any) => {
  const { children, onClick, type } = props;

  return (
    <Container onClick={onClick} type={type} ref={ref}>
      {children}
    </Container>
  );
});

PrimaryButton.displayName = 'PrimaryButton';
export default PrimaryButton;
