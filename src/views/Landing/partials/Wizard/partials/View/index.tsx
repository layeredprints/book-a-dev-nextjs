import React from 'react';

import WizardViewEnum from 'src/enums/WizardView';

import {
  Stack,
  Sprints,
  Product,
  Task,
  Project,
  Skills,
  Contact,
} from './partials';
import { Container } from './styles';

interface Props {
  currentView: string;
  onClickPrevious: () => void;
  onClickNext: (data: any) => void;
  isFirstStep: boolean;
}

const WizardView = (props: Props): JSX.Element => {
  const { currentView, onClickPrevious, onClickNext } = props;

  let view;

  const handleClickNext = (values: any) => {
    if (values) {
      onClickNext(values);
    }
  };

  switch (currentView) {
    case WizardViewEnum.Stack:
      view = <Stack onNext={handleClickNext} />;
      break;
    case WizardViewEnum.Sprints:
      view = <Sprints onPrev={onClickPrevious} onNext={handleClickNext} />;
      break;
    case WizardViewEnum.Product:
      view = <Product onNext={handleClickNext} />;
      break;
    case WizardViewEnum.Task:
      view = <Task onPrev={onClickPrevious} onNext={handleClickNext} />;
      break;
    case WizardViewEnum.Project:
      view = <Project onPrev={onClickPrevious} onNext={handleClickNext} />;
      break;
    case WizardViewEnum.Skills:
      view = <Skills onPrev={onClickPrevious} onNext={handleClickNext} />;
      break;
    case WizardViewEnum.Contact:
      view = <Contact onPrev={onClickPrevious} onNext={handleClickNext} />;
      break;
  }

  return <Container>{view}</Container>;
};

export default WizardView;
