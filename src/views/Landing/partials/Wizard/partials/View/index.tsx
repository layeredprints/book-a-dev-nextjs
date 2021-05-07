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

  let view;

  const handleClickNextView = (values: any) => {
    if (values) {
      onClickNext(values);
    }
  };

  switch (currentView) {
    case WizardViewEnum.Stack:
      view = <Stack onChange={handleClickNextView} />;
      break;
    case WizardViewEnum.Sprints:
      view = <Sprints onChange={handleClickNextView} />;
      break;
    case WizardViewEnum.Product:
      view = <Product onChange={handleClickNextView} />;
      break;
    case WizardViewEnum.Task:
      view = <Task onChange={handleClickNextView} />;
      break;
    case WizardViewEnum.Project:
      view = <Project onChange={handleClickNextView} />;
      break;
    case WizardViewEnum.Skills:
      view = <Skills onChange={handleClickNextView} />;
      break;
    case WizardViewEnum.Contact:
      view = <Contact onChange={handleClickNextView} />;
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
      </Actions>
    </Container>
  );
};

export default WizardView;
