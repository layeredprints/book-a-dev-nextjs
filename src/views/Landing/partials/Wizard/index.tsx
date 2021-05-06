import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Theme from 'src/enums/Theme';
import WizardViewEnum from 'src/enums/WizardView';
import Section from 'src/components/Section';
import Button from 'src/components/Button';

import { palette } from 'src/styles/colors';
import { useTheme } from 'src/hooks/useTheme';

import { Selector, Progress, View } from './partials';
import { Container, Content, Title, Actions } from './styles';

type SetupType = {
  id: number;
  title: string;
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
        {
          key: WizardViewEnum.Thanks,
        },
      ],
    },
    project: {
      id: 2,
      title: t('components.wizard.project.title'),
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
        {
          key: WizardViewEnum.Thanks,
        },
      ],
    },
  };

  const [selectedSetup, setSelectedSetup]: any = useState();
  const [stepIndex, setStepIndex] = useState(0);
  const [data, setData] = useState({});

  const isFirstStep = stepIndex !== 0;
  const isLastStep = selectedSetup?.options.length - 1 === stepIndex;

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
        if (stepIndex + 1 < selectedSetup.options.length) {
          setStepIndex(stepIndex + 1);
          handleSaveData(data);
        }
      }
    },
    [handleSaveData, selectedSetup, stepIndex],
  );

  useEffect(() => {
    if (isLastStep) {
      console.log({ data });
    }
  }, [data, isLastStep]);

  if (!selectedSetup) {
    return (
      <Section
        backgroundColor={
          themeName === Theme.Light
            ? palette.white.darkest
            : palette.black.lighter
        }
      >
        <Container>
          <Content>
            <Title>{t('views.home.wizard.title')}</Title>
            <Actions>
              {Object.keys(setups).map((key: string) => {
                const setup: SetupType = setups[key];

                return (
                  <Button.Primary
                    key={setup.id}
                    onClick={() => handleSelectSetup(setup)}
                  >
                    {setup.title}
                  </Button.Primary>
                );
              })}
            </Actions>
          </Content>
        </Container>
      </Section>
    );
  }

  return (
    <Section
      backgroundColor={
        themeName === Theme.Light
          ? palette.white.darkest
          : palette.black.lighter
      }
    >
      <Container>
        <Content>
          <Title>{t('views.home.wizard.title')}</Title>
          {!isLastStep && (
            <Selector
              setup={selectedSetup}
              setups={setups}
              onSelectSetup={handleSelectSetup}
            />
          )}
          {!isLastStep && (
            <Progress stepIndex={stepIndex} setup={selectedSetup} />
          )}
          <View
            currentStep={selectedSetup.options[stepIndex].key}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
          />
        </Content>
      </Container>
    </Section>
  );
};

export default Wizard;
