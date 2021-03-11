import Button from '../../Button';
import Title from '../../Title';
import LogoBAD from './LogoBAD';
import ResponsiveWrapper from './ResponsiveWrapper';

const Header = ({
  scrollToContact,
} : {
  scrollToContact: () => void,
}) => (
  <header className="bg-purple-900">
    <h1 className="hidden">Book A Developer</h1>
    <ResponsiveWrapper>
      <div className="flex justify-between items-center my-8">
        <LogoBAD />
        <Button
          outline
          type="button"
          onClick={scrollToContact}
          label="Contact"
        />
      </div>
      <div className="flex">
        <div>
          <Title
            heading="h1"
            text="Developers nodig?"
            className="text-white"
          />
          <p className="font-openSans text-white">
            Boek ze hier, per sprint.
            Ervaren developers uit eigen land, met goesting om jouw uitdagingen aan te pakken.
            Mensen die perfect passen in agile development teams.
            Om een tijdelijk tekort op te vangen, een team op weg te zetten of te versterken met specifieke expertise.
          </p>
        </div>
        <div>
          <img
            src="/header_team.svg"
            alt="teamword"
          />
        </div>
      </div>
    </ResponsiveWrapper>
  </header>
);

export default Header;
