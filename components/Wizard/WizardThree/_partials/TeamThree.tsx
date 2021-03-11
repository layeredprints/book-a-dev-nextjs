import Input from '../../../Input';
import Title from '../../../Title';

const TeamThree = () => (
  <div>
    <Title
      heading="h3"
      text="Wil je nog iets kwijt?"
    />
    <div className="flex">
      <Input
        label="GSM-nummer"
        type="tel"
        name="telephone"
        placeholder="(+32)000 00 00 00"
        className="rounded-full"
        onChange={(e: any) => console.log(e)}
      />
      <Input
        label="E-mail"
        type="email"
        name="email"
        placeholder="naam@domein.be"
        className="rounded-full"
        onChange={(e: any) => console.log(e)}
      />
    </div>
    <Input
      name="message"
      label="Vertel ons iets over het team / jullie projecten / ..."
      type="textarea"
      className="rounded-2xl w-full resize-none"
      placeholder="Zijn er belangrijke zaken die wij nog moeten weten, of wil je gewoon ons wat inleiden..."
      onChange={(e: any) => console.log(e)}
    />
  </div>
);

export default TeamThree;
