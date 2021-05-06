import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/Button';

import { Container, Content, Actions } from './styles';

interface Props {
  setup: any;
  stepIndex: number;
  onClickPrevious: () => void;
  onClickNext: () => void;
}

const WizardView = (props: Props): JSX.Element => {
  const { setup, stepIndex, onClickPrevious, onClickNext } = props;
  const { t } = useTranslation();

  const isFirstStep = stepIndex !== 0;
  const isLastStep = setup.options.length - 1 === stepIndex;

  return (
    <Container>
      <Content>{setup.options[stepIndex].key}</Content>
      <Actions>
        {!isFirstStep ||
          (!isLastStep && (
            <Button.Secondary onClick={onClickPrevious}>
              {t('labels.previous')}
            </Button.Secondary>
          ))}
        {!isLastStep && (
          <Button.Primary onClick={onClickNext}>
            {t('labels.next')}
          </Button.Primary>
        )}
      </Actions>
    </Container>
  );
};

export default WizardView;
