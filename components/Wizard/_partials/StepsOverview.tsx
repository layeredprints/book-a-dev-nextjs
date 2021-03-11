import { map, times } from 'lodash';
import { useEffect, useState } from 'react';
import c from '../../../utils/c';

const StepsOverview = ({
  step,
  service,
} : {
  step: number,
  service: string;
}) => {
  const [amountOfSteps, setAmountOfSteps] = useState<number>(0);
  useEffect(() => {
    setAmountOfSteps(service === 'team' ? 3 : 5);
  }, [service]);
  return (
    <div className="flex">
      {times(amountOfSteps, (s) => (
        <div
          className={c('h-4 w-6', {
            'bg-bx-purple': s + 1 <= step,
            'bg-gray-400': s + 1 > step,
          })}
        />
      ))}
    </div>
  );
};

export default StepsOverview;
