import { ReactNode, useState } from 'react';
import Footer from './_partials/Footer';
import Header from './_partials/Header';
import Menu from './_partials/Menu';

const index = ({
  children,
}: {
  children: ReactNode
}) => {
  const [menuIsVisible, toggleMenu] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      {menuIsVisible && (
        <Menu menuIsVisible={menuIsVisible} toggleMenu={toggleMenu} />
      )}
      <Header menuIsVisible={menuIsVisible} toggleMenu={toggleMenu} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default index;
