import ProjectOne from './_partials/ProjectOne';
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
    {service === 'team' ? (
      <TeamOne />
    ) : (
      <ProjectOne />
    )}
  </div>
);

export default index;
