import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Theme from 'src/enums/Theme';
import WizardViewEnum from 'src/enums/WizardView';
import Section from 'src/components/Section';

import { palette } from 'src/styles/colors';
import { useTheme } from 'src/hooks/useTheme';

import { Selector, Progress, View } from './partials';
import {
  Container,
  Content,
  Title,
  Actions,
  Action,
  Image,
  Label,
} from './styles';

type SetupType = {
  id: number;
  title: string;
  image: string;
  options: {
    key: string;
  }[];
};

const Wizard = (): JSX.Element => {
  const { t } = useTranslation();
  const { themeName } = useTheme();

  const setups: any = {
    team: {
      id: 1,
      title: t('components.wizard.team.title'),
      image: 'assets/illustrations/wizard-team.svg',
      options: [
        {
          key: WizardViewEnum.Stack,
        },
        {
          key: WizardViewEnum.Sprints,
        },
        {
          key: WizardViewEnum.Contact,
        },
      ],
    },
    project: {
      id: 2,
      title: t('components.wizard.project.title'),
      image: 'assets/illustrations/wizard-project.svg',
      options: [
        {
          key: WizardViewEnum.Product,
        },
        {
          key: WizardViewEnum.Task,
        },
        {
          key: WizardViewEnum.Project,
        },
        {
          key: WizardViewEnum.Skills,
        },
        {
          key: WizardViewEnum.Contact,
        },
      ],
    },
  };

  const [selectedSetup, setSelectedSetup]: any = useState();
  const [stepIndex, setStepIndex] = useState(0);
  const [data, setData] = useState({});

  const backgroundColor = useMemo(
    () =>
      themeName === Theme.Light ? palette.white.darkest : palette.black.lighter,
    [themeName],
  );

  const handleSaveData = useCallback(
    (newData) => {
      setData({ ...data, ...newData });
    },
    [data],
  );

  const handleSelectSetup = useCallback((setup: SetupType) => {
    setSelectedSetup(setup);
    setStepIndex(0);
  }, []);

  const handleClickPrevious = useCallback(() => {
    if (selectedSetup) {
      if (stepIndex > 0) {
        setStepIndex(stepIndex - 1);
      }
    }
  }, [selectedSetup, stepIndex]);

  const handleClickNext = useCallback(
    (data: any) => {
      if (selectedSetup) {
        if (stepIndex < selectedSetup.options.length) {
          setStepIndex(stepIndex + 1);
          handleSaveData(data);
        }
      }
    },
    [handleSaveData, selectedSetup, stepIndex],
  );

  const isAtStart = !selectedSetup;
  const isFinished = stepIndex === selectedSetup?.options.length;

  useEffect(() => {
    if (isFinished) {
      console.log({ data });
    }
  }, [data, isFinished]);

  if (isAtStart) {
    return (
      <Section backgroundColor={backgroundColor}>
        <Container>
          <Content>
            <Title>{t('views.home.wizard.title')}</Title>
            <Actions>
              {Object.keys(setups).map((key: string) => {
                const setup: SetupType = setups[key];

                return (
                  <Action
                    key={setup.id}
                    onClick={() => handleSelectSetup(setup)}
                  >
                    <Image src={setup.image} alt="setup" width="250" />
                    <Label>{setup.title}</Label>
                  </Action>
                );
              })}
            </Actions>
          </Content>
        </Container>
      </Section>
    );
  }

  if (isFinished) {
    return (
      <Section backgroundColor={backgroundColor}>
        <Container>
          <Content>
            <Title>{t('views.home.wizard.title')}</Title>
            <p>Thanks</p>
          </Content>
        </Container>
      </Section>
    );
  }

  return (
    <Section backgroundColor={backgroundColor}>
      <Container>
        <Content>
          <Title>{t('views.home.wizard.title')}</Title>
          <Selector
            setups={setups}
            onSelectSetup={handleSelectSetup}
            setup={selectedSetup}
          />
          <Progress setup={selectedSetup} stepIndex={stepIndex} />
          <View
            currentView={selectedSetup.options[stepIndex].key}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
          />
        </Content>
      </Container>
    </Section>
  );
};

export default Wizard;
