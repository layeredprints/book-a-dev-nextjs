import TeamThree from './_partials/TeamThree';

const index = ({
  step,
  setStep,
  service,
  setService,
} : {
  step: number,
  setStep: (e: number) => void,
  service: string,
  setService: (s: string) => void,
}) => (
  <div>
    {service === 'team' && (
      <TeamThree />
    )}
  </div>
);

export default index;
