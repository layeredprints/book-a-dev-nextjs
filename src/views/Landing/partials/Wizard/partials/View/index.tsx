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
} from './partials';
import { Container, Content, Actions } from './styles';

interface Props {
  currentView: string;
  onClickPrevious: () => void;
  onClickNext: (data: any) => void;
  isFirstStep: boolean;
}

const WizardView = (props: Props): JSX.Element => {
  const { currentView, onClickPrevious, onClickNext, isFirstStep } = props;
  const { t } = useTranslation();

  const [value, setValue] = useState();

  let view;

  switch (currentView) {
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
  }

  return (
    <Container>
      <Content>{view}</Content>
      <Actions>
        {!isFirstStep && (
          <Button.Secondary onClick={onClickPrevious}>
            {t('labels.previous')}
          </Button.Secondary>
        )}
        <Button.Primary onClick={() => onClickNext(value)}>
          {t('labels.next')}
        </Button.Primary>
      </Actions>
    </Container>
  );
};

export default WizardView;
