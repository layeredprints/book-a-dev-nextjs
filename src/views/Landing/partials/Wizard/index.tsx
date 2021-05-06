import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Theme from 'src/enums/Theme';
import Section from 'src/components/Section';
import { palette } from 'src/styles/colors';
import { useTheme } from 'src/hooks/useTheme';

import { Selector, Progress, View } from './partials';
import { Container, Content, Title, Actions } from './styles';
import Button from 'src/components/Button';

const Wizard = (): JSX.Element => {
  const { t } = useTranslation();
  const { themeName } = useTheme();

  const [flow, setFlow]: any = useState();

  const flows = {
    team: [
      {
        key: 'stack',
        component: () => null,
      },
      {
        key: 'sprints',
        component: () => null,
      },
      {
        key: 'extra',
        component: () => null,
      },
      {
        key: 'thanks',
        component: () => null,
      },
    ],
    project: [
      {
        key: 'what',
        component: () => null,
      },
      {
        key: 'deliverables',
        component: () => null,
      },
      {
        key: 'project',
        component: () => null,
      },
      {
        key: 'skills',
        component: () => null,
      },
      {
        key: 'extra',
        component: () => null,
      },
      {
        key: 'thanks',
        component: () => null,
      },
    ],
  };

  const handleSelectFlow = useCallback((flow: any) => {
    setFlow(flow);
  }, []);

  if (!flow) {
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
              <Button.Primary onClick={() => handleSelectFlow(flows.team)}>
                Team
              </Button.Primary>
              <Button.Primary onClick={() => handleSelectFlow(flows.project)}>
                Project
              </Button.Primary>
            </Actions>
            <p>Welkom</p>
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
          <Selector options={flow} handleSelectOption={handleSelectFlow} />
          <Progress flow={flow} />
          <View>
            <p>{flow[0].key}</p>
          </View>
        </Content>
      </Container>
    </Section>
  );
};

export default Wizard;
