import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from 'src/components/Section';
import { palette } from 'src/styles/colors';

import { Container, Content, Title } from './styles';

const Wizard = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Section backgroundColor={palette.white.darkest}>
      <Container>
        <Content>
          <Title>{t('views.home.wizard.title')}</Title>
        </Content>
      </Container>
    </Section>
  );
};

export default Wizard;
