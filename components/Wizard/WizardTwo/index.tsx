import ProjectTwo from './_partials/ProjectTwo';
import TeamTwo from './_partials/TeamTwo';

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
      <TeamTwo />
    ) : (
      <ProjectTwo />
    )}
  </div>
);

export default index;
