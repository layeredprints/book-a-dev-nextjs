import { useEffect, useState } from 'react';
import Button from '../../Button';

const WizardNavigation = ({
  step,
  setStep,
  service,
  setService,
} : {
  step: number,
  setStep: (e: number) => void,
  service: string,
  setService: (s: string) => void,
}) => {
  const [lastStep, setLastStep] = useState(false);
  useEffect(() => {
    if (service === 'team' && step === 3) {
      setLastStep(true);
    } else if (service === 'project' && step === 5) {
      setLastStep(true);
    } else {
      setLastStep(false);
    }
  }, [step]);
  const renderButtons = () => {
    const prevBut = step !== 1
      && (
        <Button
          outline
          label="vorige"
          onClick={() => setStep(step - 1)}
        />
      );
    const nextBut = lastStep
      ? (
        <Button
          label="submit"
          onClick={() => console.log('send from context')}
        />
      ) : (
        <Button
          type="button"
          label="Next"
          onClick={() => setStep(step + 1)}
        />
      );
    return (
      <nav className="flex">
        {prevBut}
        {nextBut}
      </nav>
    );
  };

  const buttons = (renderButtons());

  return (
    buttons
  );
};

export default WizardNavigation;
