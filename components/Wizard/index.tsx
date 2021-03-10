import { useState } from 'react';
import WizardInit from './WizardInit';
import WizardOne from './WizardOne';
import WizardTwo from './WizardTwo';
import WizardThree from './WizardThree';
import WizardFour from './WizardFour';

const index = () => {
  const [step, setStep] = useState(0);
  const [service, setService] = useState(undefined);
  return (
    <section className="bg-gray-200 py-8">
      {step === 0 && (
      <WizardInit step={step} setStep={setStep} setService={setService} />
      )}
      { step === 1 && (
        <WizardOne step={step} setStep={setStep} setService={setService} />
      )}
      { step === 2 && (
        <WizardTwo step={step} setStep={setStep} setService={setService} />
      )}
      { step === 3 && (
        <WizardThree step={step} setStep={setStep} setService={setService} />
      )}
      { step === 4 && (
        <WizardFour step={step} setStep={setStep} setService={setService} />
      )}
    </section>
  );
};

export default index;
