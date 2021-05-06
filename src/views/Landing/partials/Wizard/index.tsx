import React, { Dispatch, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Theme from 'src/enums/Theme';
import Section from 'src/components/Section';
import { palette } from 'src/styles/colors';
import { useTheme } from 'src/hooks/useTheme';

import { Selector, Progress, View } from './partials';
import { Container, Content, Title, Actions } from './styles';
import Button from 'src/components/Button';

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
          key: 'stack',
        },
        {
          key: 'sprints',
        },
        {
          key: 'extra',
        },
        {
          key: 'thanks',
        },
      ],
    },
    project: {
      id: 2,
      title: t('components.wizard.project.title'),
      options: [
        {
          key: 'what',
        },
        {
          key: 'deliverables',
        },
        {
          key: 'project',
        },
        {
          key: 'skills',
        },
        {
          key: 'extra',
        },
        {
          key: 'thanks',
        },
      ],
    },
  };

  const [selectedSetup, setSelectedSetup]: [
    SetupType | undefined,
    Dispatch<SetupType>,
  ] = useState();
  const [stepIndex, setStepIndex] = useState(0);

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

  const handleClickNext = useCallback(() => {
    if (selectedSetup) {
      if (stepIndex + 1 < selectedSetup.options.length) {
        setStepIndex(stepIndex + 1);
      }
    }
  }, [selectedSetup, stepIndex]);

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
          <Selector
            setup={selectedSetup}
            setups={setups}
            onSelectSetup={handleSelectSetup}
          />
          <Progress stepIndex={stepIndex} setup={selectedSetup} />
          <View
            setup={selectedSetup}
            stepIndex={stepIndex}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
          />
        </Content>
      </Container>
    </Section>
  );
};

export default Wizard;
