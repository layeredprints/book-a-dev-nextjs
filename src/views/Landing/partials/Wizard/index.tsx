import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from 'src/components/Section';

import { palette } from 'src/styles/colors';

import { Container, Content, Title } from './styles';
import Theme from 'src/enums/Theme';
import { useTheme } from 'src/hooks/useTheme';

const Wizard = (): JSX.Element => {
  const { t } = useTranslation();
  const { themeName } = useTheme();

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
        </Content>
      </Container>
    </Section>
  );
};

export default Wizard;
