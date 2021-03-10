import { ReactNode, useState } from 'react';
import Footer from './_partials/Footer';
import Header from './_partials/Header';

const index = ({
  scrollToContact,
  children,
}: {
  scrollToContact: () => void,
  children: ReactNode
}) => (
  <div className="min-h-screen flex flex-col">
    <Header scrollToContact={scrollToContact} />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

export default index;
