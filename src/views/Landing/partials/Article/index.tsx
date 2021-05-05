import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'src/components/Button';
import Section from 'src/components/Section';

import { Container, Content, Title, Paragraph, Illustration } from './styles';

interface Props {
  onClickAction?: () => null;
}

const Article = (props: Props): JSX.Element => {
  const { t } = useTranslation();
  const { onClickAction } = props;

  return (
    <Section>
      <Container>
        <Content>
          <Title>{t('views.home.article.title')}</Title>
          <Paragraph>{t('views.home.article.paragraph')}</Paragraph>
          <Button.Primary onClick={onClickAction}>
            {t('labels.book')}
          </Button.Primary>
        </Content>
        <Illustration>
          <img src="assets/illustrations/team.svg" alt="article" />
        </Illustration>
      </Container>
    </Section>
  );
};

export default Article;
