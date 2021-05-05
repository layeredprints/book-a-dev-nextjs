import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from 'src/components/Section';
import Skeleton from 'src/components/Skeleton';
import { QueryType, TeamMemberType } from 'src/types';

import { Item } from './partials';
import { Container, Content, Title, Subtitle, List } from './styles';

interface Props {
  clients: QueryType;
}

const Clients = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const { isLoading, isError, data } = props.clients;

  const isEmpty = data?.length === 0;

  if (isLoading) {
    return (
      <Section>
        <Container.Loading>
          {[0, 1].map((n) => (
            <Skeleton.Article key={n} />
          ))}
        </Container.Loading>
      </Section>
    );
  }

  if (isError || !data) {
    return (
      <Section>
        <Container.Error>
          <Title>{t('components.list.isError.title')}</Title>
          <Subtitle>{t('components.list.isError.subtitle')}</Subtitle>
        </Container.Error>
      </Section>
    );
  }

  if (isEmpty) {
    return (
      <Section>
        <Container.Empty>
          <Title>{t('components.list.isEmpty.title')}</Title>
          <Subtitle>{t('components.list.isEmpty.subtitle')}</Subtitle>
        </Container.Empty>
      </Section>
    );
  }

  return (
    <Section>
      <Container.Success>
        <Content>
          <Title>{t('views.home.clients.title')}</Title>
        </Content>
        <List>
          {data.map((item: TeamMemberType) => (
            <Item key={item.id} image={item.image} />
          ))}
        </List>
      </Container.Success>
    </Section>
  );
};

export default Clients;
