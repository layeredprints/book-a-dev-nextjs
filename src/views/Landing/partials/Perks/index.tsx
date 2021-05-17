import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from 'src/components/Section';

import Item from './Item';

import { Container, Content, Title, Subtitle, List } from './styles';

type PerkType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const Perks = (): JSX.Element => {
  const { t } = useTranslation();

  const PERKS: PerkType[] = [
    {
      id: 1,
      title: t('views.home.perks.list.flexible.title'),
      description: t('views.home.perks.list.flexible.description'),
      image: 'assets/illustrations/perks-flexible.svg',
    },
    {
      id: 2,
      title: t('views.home.perks.list.rapid.title'),
      description: t('views.home.perks.list.rapid.description'),
      image: 'assets/illustrations/perks-rapid.svg',
    },
    {
      id: 3,
      title: t('views.home.perks.list.experienced.title'),
      description: t('views.home.perks.list.experienced.description'),
      image: 'assets/illustrations/perks-experienced.svg',
    },
    {
      id: 4,
      title: t('views.home.perks.list.remote.title'),
      description: t('views.home.perks.list.remote.description'),
      image: 'assets/illustrations/perks-remote.svg',
    },
  ];

  return (
    <Section>
      <Container>
        <Content>
          <Title>{t('views.home.perks.title')}</Title>
          <Subtitle>{t('views.home.perks.subtitle')}</Subtitle>
        </Content>
        <List>
          {PERKS.map((perk: PerkType) => (
            <Item
              key={perk.id}
              title={perk.title}
              description={perk.description}
              image={perk.image}
            />
          ))}
        </List>
      </Container>
    </Section>
  );
};

export default Perks;
