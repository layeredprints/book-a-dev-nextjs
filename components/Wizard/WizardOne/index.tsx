import TeamOne from './_partials/TeamOne';

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
      <TeamOne />
    )}
  </div>
);

export default index;
