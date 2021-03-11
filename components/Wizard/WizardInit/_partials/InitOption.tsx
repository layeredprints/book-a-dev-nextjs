const InitOption = ({
  label,
  step,
  service,
  setStep,
  setService,
} : {
  label: string,
  step: number,
  service: string,
  setStep: (e: number) => void,
  setService: (s: string) => void,
}) => (
  <button
    type="button"
    className="bg-white rounded-2xl h-96 w-48 p-8"
    onClick={() => {
      setStep(step + 1);
      setService(service);
    }}
  >
    {label}
  </button>
);

export default InitOption;
