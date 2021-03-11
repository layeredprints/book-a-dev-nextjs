import Head from 'next/head';
import { useRef } from 'react';
import Contact from '../components/Contact';
import Layout from '../components/Layout';
import Pillars from '../components/Pillars';
import Wizard from '../components/Wizard';

export default function Home() {
  const contactRef = useRef(null);
  const scrollToContact = () => {
    contactRef.current.scrollIntoView();
  };

  return (
    <>
      <Head>
        <title>Ballistix - Book A Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout scrollToContact={scrollToContact}>
        <Pillars />
        <Wizard />
        <Contact contactRef={contactRef} />
      </Layout>
    </>
  );
}
