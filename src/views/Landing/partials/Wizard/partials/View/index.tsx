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
  data: any;
  currentView: string;
  onClickPrevious: () => void;
  onClickNext: (data: any) => void;
  isFirstStep: boolean;
}

const WizardView = (props: Props): JSX.Element => {
  const { data, currentView, onClickPrevious, onClickNext } = props;

  let view;

  const handleClickNext = (values: any) => {
    if (values) {
      onClickNext(values);
    }
  };

  switch (currentView) {
    case WizardViewEnum.Stack:
      view = <Stack data={data} onNext={handleClickNext} />;
      break;
    case WizardViewEnum.Sprints:
      view = (
        <Sprints
          data={data}
          onPrev={onClickPrevious}
          onNext={handleClickNext}
        />
      );
      break;
    case WizardViewEnum.Product:
      view = <Product data={data} onNext={handleClickNext} />;
      break;
    case WizardViewEnum.Task:
      view = (
        <Task data={data} onPrev={onClickPrevious} onNext={handleClickNext} />
      );
      break;
    case WizardViewEnum.Project:
      view = (
        <Project
          data={data}
          onPrev={onClickPrevious}
          onNext={handleClickNext}
        />
      );
      break;
    case WizardViewEnum.Skills:
      view = (
        <Skills data={data} onPrev={onClickPrevious} onNext={handleClickNext} />
      );
      break;
    case WizardViewEnum.Contact:
      view = (
        <Contact
          data={data}
          onPrev={onClickPrevious}
          onNext={handleClickNext}
        />
      );
      break;
  }

  return <Container>{view}</Container>;
};

export default WizardView;
