import React from 'react';
import { useTranslation } from 'react-i18next';
import { palette } from 'src/styles/colors';
import Button from '../Button';
import Icon from '../Icon';
import Section from '../Section';

import { Container, Content, Action, Title } from './styles';

const Header = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Section backgroundColor={palette.brand.darker}>
      <Container>
        <Content>
          <Icon.Logo color={palette.white.base} size={2} />
          <Title>ook A Developer</Title>
        </Content>
        <Action>
          <Button.Secondary>
            {t('components.header.labels.contact')}
          </Button.Secondary>
        </Action>
      </Container>
    </Section>
  );
};

export default Header;
