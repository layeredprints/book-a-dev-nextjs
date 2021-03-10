import ResponsiveWrapper from './ResponsiveWrapper';

const Header = ({
  menuIsVisible,
  toggleMenu,
}: {
  menuIsVisible?: boolean,
  toggleMenu?: (e: boolean) => void,
}) => (
  <header className="p-6 mb-6 w-full z-50">
    <nav className="fixed top-0 left-0 w-full">
      <ResponsiveWrapper>
        <p>header</p>
      </ResponsiveWrapper>
    </nav>
  </header>
);

export default Header;
