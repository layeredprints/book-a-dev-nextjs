import ResponsiveWrapper from './ResponsiveWrapper';

const Header = ({
  scrollToContact,
} : {
  scrollToContact: () => void,
}) => (
  <header className="bg-purple-900">
    <h1 className="hidden">Book A Developer</h1>
    <ResponsiveWrapper>
      <button
        type="button"
        onClick={scrollToContact}
      >
        Contact
      </button>
    </ResponsiveWrapper>
  </header>
);

export default Header;
