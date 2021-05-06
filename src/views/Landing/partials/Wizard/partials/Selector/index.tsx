import React, { useState } from 'react';

import { Container } from './styles';

interface Props {
  options: any[];
  handleSelectOption: (option: any) => void;
}

const WizardSelector = (props: Props): JSX.Element => {
  const { options, handleSelectOption } = props;
  const [selectedOption, setSelectedOption] = useState();

  console.log({
    options,
    handleSelectOption,
    selectedOption,
    setSelectedOption,
  });

  return <Container></Container>;
};

export default WizardSelector;
