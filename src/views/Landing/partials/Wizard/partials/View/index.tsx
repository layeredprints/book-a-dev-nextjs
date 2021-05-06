import React, { useState } from 'react';
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
  currentStep: string;
  isFirstStep: boolean;
  isLastStep: boolean;
  onClickPrevious: () => void;
  onClickNext: (data: any) => void;
}

const WizardView = (props: Props): JSX.Element => {
  const {
    currentStep,
    isFirstStep,
    isLastStep,
    onClickPrevious,
    onClickNext,
  } = props;
  const { t } = useTranslation();

  const [value, setValue] = useState();

  let view;

  switch (currentStep) {
    case WizardViewEnum.Stack:
      view = <Stack onChange={setValue} />;
      break;
    case WizardViewEnum.Sprints:
      view = <Sprints onChange={setValue} />;
      break;
    case WizardViewEnum.Product:
      view = <Product onChange={setValue} />;
      break;
    case WizardViewEnum.Task:
      view = <Task onChange={setValue} />;
      break;
    case WizardViewEnum.Project:
      view = <Project onChange={setValue} />;
      break;
    case WizardViewEnum.Skills:
      view = <Skills onChange={setValue} />;
      break;
    case WizardViewEnum.Contact:
      view = <Contact onChange={setValue} />;
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
          <Button.Primary onClick={() => onClickNext(value)}>
            {t('labels.next')}
          </Button.Primary>
        )}
      </Actions>
    </Container>
  );
};

export default WizardView;
