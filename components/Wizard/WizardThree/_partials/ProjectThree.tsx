import { find, map } from 'lodash';
import { useEffect, useState } from 'react';
import c from '../../../../utils/c';
import Input from '../../../Input';

const ProjectThree = () => {
  const today = new Date();
  const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
  const [selectedDate, setSelectedDate] = useState(nextWeek);
  const [selectedSize, setSelectedSize] = useState(undefined);
  const [selectedSpeed, setSelectedSpeed] = useState(undefined);
  const sizes = [{
    value: 'sm',
  }, {
    value: 'md',
  }, {
    value: 'lg',
  }];
  const speeds = [{
    value: 'slow',
  }, {
    value: 'medium',
  }, {
    value: 'fast',
  }];
  return (
    <div>
      <div className="flex">
        <div>
          <p className="py-2 font-openSans font-extrabold block">Hoe groot is je project?</p>
          <div className="flex">
            {map(sizes, ({ value }) => (
              <Input
                name="projectSize"
                type="customradio"
                value={value}
                onChange={(e: any) => setSelectedSize(e.target.value)}
              >
                <div className={c('bg-white cursor-pointer', {
                  'border border-bx-blue': selectedSize === value,
                })}
                >
                  {value}
                </div>
              </Input>
            ))}
          </div>
        </div>
        <div>
          <p className="py-2 font-openSans font-extrabold block">Hoe snel wil je dit?</p>
          <div className="flex">
            {map(speeds, ({ value }) => (
              <Input
                name="projectSpeed"
                type="customradio"
                value={value}
                onChange={(e: any) => setSelectedSpeed(e.target.value)}
              >
                <div className={c('bg-white cursor-pointer', {
                  'border border-bx-blue': selectedSpeed === value,
                })}
                >
                  {value}
                </div>
              </Input>
            ))}
          </div>
        </div>
      </div>
      <Input
        name="projectStart"
        label="Wanneer wil je starten?"
        type="date"
        defaultValue={selectedDate}
        className="rounded-full"
        minDate={nextWeek}
        onChange={(e: any) => setSelectedDate(new Date(e))}
      />
    </div>
  );
};

export default ProjectThree;
