const ServicePicker = ({
  service,
  setStep,
  setService,
} : {
  service: string,
  setStep: (step: number) => void,
  setService: (serv: string) => void,
}) => (
  <div>
    <button
      type="button"
      onClick={() => {
        setService(service === 'team' ? 'project' : 'team');
        setStep(1);
      }}
    >
      <img src="/chevron_left.svg" alt="chevron left" />
    </button>
    {service}
    <button
      type="button"
      onClick={() => {
        setService(service === 'team' ? 'project' : 'team');
        setStep(1);
      }}
    >
      <img src="/chevron_right.svg" alt="chevron right" />
    </button>
  </div>
);

export default ServicePicker;
