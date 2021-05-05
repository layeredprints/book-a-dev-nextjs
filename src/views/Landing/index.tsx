import React, { useCallback } from 'react';

import Layout from 'src/components/Layout';

import { useClients } from 'src/hooks/useClients';
import { useTeam } from 'src/hooks/useTeam';

import { Article, Perks, Wizard, Team, Clients, Questions } from './partials';
import { Container } from './styles';

const Landing = (): JSX.Element => {
  const { members } = useTeam();
  const { clients } = useClients();

  const handleClickContact = useCallback(() => null, []);

  const handleSubmitForm = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <Layout>
      <Container>
        <Article onClickAction={handleClickContact} />
        <Perks />
        <Wizard />
        <Team members={members} />
        <Clients clients={clients} />
        <Questions handleSubmitForm={handleSubmitForm} />
      </Container>
    </Layout>
  );
};

export default Landing;
