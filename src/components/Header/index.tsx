import React from 'react';
import { useTranslation } from 'react-i18next';
import { palette } from 'src/styles/colors';
import Button from '../Button';
import Icon from '../Icon';

import { Container, Content, Action, Title, Head } from './styles';

const Header = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Container>
      <Content>
        <Head>
          <Icon.Logo color={palette.white.base} size={2} />
          <Title>ook A Developer</Title>
        </Head>
        <Action>
          <Button.Secondary>
            {t('components.header.labels.contact')}
          </Button.Secondary>
        </Action>
      </Content>
    </Container>
  );
};

export default Header;
