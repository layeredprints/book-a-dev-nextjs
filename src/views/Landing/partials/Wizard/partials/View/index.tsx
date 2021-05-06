import React from 'react';
import { useTranslation } from 'react-i18next';

import WizardViewEnum from 'src/enums/WizardView';
import Button from 'src/components/Button';

import {
  Stack,
  Sprints,
  Product,
  Task,
  Project,
  Skills,
  Contact,
  Thanks,
} from './partials';
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

  const currentKey = setup.options[stepIndex].key;

  const isFirstStep = stepIndex !== 0;
  const isLastStep = setup.options.length - 1 === stepIndex;

  let view;

  switch (currentKey) {
    case WizardViewEnum.Stack:
      view = <Stack />;
      break;
    case WizardViewEnum.Sprints:
      view = <Sprints />;
      break;
    case WizardViewEnum.Product:
      view = <Product />;
      break;
    case WizardViewEnum.Task:
      view = <Task />;
      break;
    case WizardViewEnum.Project:
      view = <Project />;
      break;
    case WizardViewEnum.Skills:
      view = <Skills />;
      break;
    case WizardViewEnum.Contact:
      view = <Contact />;
      break;
    case WizardViewEnum.Thanks:
      view = <Thanks />;
      break;
  }

  return (
    <Container>
      <Content>{view}</Content>
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
