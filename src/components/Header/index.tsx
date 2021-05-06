import React from 'react';
import { useTranslation } from 'react-i18next';
import { palette } from 'src/styles/colors';
import Button from '../Button';
import Icon from '../Icon';

import { Container, Content, Action, Title, Head } from './styles';

interface Props {
  onClickAction: () => void;
}

const Header = (props: Props): JSX.Element => {
  const { onClickAction } = props;
  const { t } = useTranslation();

  return (
    <Container>
      <Content>
        <Head>
          <Icon.Logo color={palette.white.base} size={2} />
          <Title>ook A Developer</Title>
        </Head>
        <Action>
          <Button.Secondary onClick={onClickAction}>
            {t('components.header.labels.contact')}
          </Button.Secondary>
        </Action>
      </Content>
    </Container>
  );
};

export default Header;
