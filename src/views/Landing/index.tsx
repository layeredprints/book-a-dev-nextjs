import React, { useCallback, useRef } from 'react';

import Layout from 'src/components/Layout';

import { useClients } from 'src/hooks/useClients';
import { useTeam } from 'src/hooks/useTeam';

import { Article, Perks, Wizard, Team, Clients, Contact } from './partials';
import { Container } from './styles';

const Landing = (): JSX.Element => {
  const { members } = useTeam();
  const { clients } = useClients();

  const contactRef: any = useRef();
  const wizardRef: any = useRef();

  const handleClickContact = useCallback(
    () => contactRef.current.scrollIntoView({ behavior: 'smooth' }),
    [],
  );

  const handleClickWizard = useCallback(
    () => wizardRef?.current?.scrollIntoView({ behavior: 'smooth' }),
    [],
  );

  const handleSendMailToNikolas = useCallback((data: any) => {
    console.log('A mail has been send to Nikolas with attachement:', data);
  }, []);

  return (
    <Layout onClickAction={handleClickContact}>
      <Container>
        <Article onClickAction={handleClickWizard} />
        <Perks />
        <Wizard onSubmitData={handleSendMailToNikolas} wizardRef={wizardRef} />
        <Team members={members} />
        <Clients clients={clients} />
        <Contact
          onSubmitData={handleSendMailToNikolas}
          contactRef={contactRef}
        />
      </Container>
    </Layout>
  );
};

export default Landing;
