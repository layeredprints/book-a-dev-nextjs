import ProjectThree from './_partials/ProjectThree';
import LastScreen from '../_partials/LastScreen';

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
      <LastScreen />
    ) : (
      <ProjectThree />
    )}
  </div>
);

export default index;
