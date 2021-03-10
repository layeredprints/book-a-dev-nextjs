const WizardInit = ({
  step,
  setStep,
  setService,
} : {
  step: number,
  setStep: (e: number) => void,
  setService: (s: string) => void,
}) => (
  <div className="flex">
    <button
      type="button"
      onClick={() => setStep(2)}
    >
      volgende
    </button>
    <div>
      KEUZE 1
    </div>
    <div>
      KEUZE 2
    </div>
    <button
      type="button"
      onClick={() => setStep(2)}
    >
      volgende
    </button>
  </div>
);

export default WizardInit;
