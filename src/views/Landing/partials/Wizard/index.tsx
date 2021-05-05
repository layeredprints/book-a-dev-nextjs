import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import Section from 'src/components/Section';

import { palette } from 'src/styles/colors';

import { Container, Content, Title } from './styles';
import Theme from 'src/enums/Theme';

const Wizard = (): JSX.Element => {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);

  return (
    <Section
      backgroundColor={
        theme === Theme.Light ? palette.white.darkest : palette.black.lighter
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
