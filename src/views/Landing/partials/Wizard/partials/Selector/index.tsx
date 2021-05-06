import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from 'src/components/Icon';
import { palette } from 'src/styles/colors';

import { Container, Action, Head, Title, Subtitle } from './styles';

interface Props {
  setup: any;
  setups: any;
  onSelectSetup: (option: any) => void;
}

const WizardSelector = (props: Props): JSX.Element => {
  const { setup, setups, onSelectSetup } = props;
  const { t } = useTranslation();

  // 💩  // Component is not scalable, need to fix this later on
  const handleSelectPreviousSetup = () => {
    onSelectSetup(setups.team);
  };

  const handleSelectNextSetup = () => {
    onSelectSetup(setups.project);
  };

  return (
    <Container>
      <Action onClick={handleSelectPreviousSetup} isDisabled={setup.id !== 2}>
        <Icon.Arrow color={palette.accent.base} />
      </Action>
      <Head>
        <Subtitle>{t('labels.choice')}</Subtitle>
        <Title>{setup.title}</Title>
      </Head>
      <Action onClick={handleSelectNextSetup} isDisabled={setup.id !== 1}>
        <Icon.Arrow color={palette.accent.base} isFlipped />
      </Action>
    </Container>
  );
};

export default WizardSelector;
