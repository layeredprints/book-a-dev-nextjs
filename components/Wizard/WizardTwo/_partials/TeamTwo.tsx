import { useState } from 'react';
import Input from '../../../Input';
import Title from '../../../Title';

const TeamTwo = () => {
  const today = new Date();
  const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
  const [selectedDate, setSelectedDate] = useState(nextWeek);
  const currencyOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div>
      <Title
        heading="h3"
        text="Sprints"
      />
      <div className="flex">
        <div>
          <label className="py-2 font-openSans font-extrabold block cursor-pointer" htmlFor="sprintDuration">Hoe lang duurt een sprint?</label>
          <div className="flex">
            <Input
              type="number"
              name="sprintDuration"
              onChange={(e: any) => console.log(e.target.value)}
              className="rounded-full"
              min={1}
              max={10}
              value={1}
            />
            <Input
              type="select"
              name="sprintCurrency"
              options={currencyOptions}
              onChange={(e: any) => console.log(e)}
            />
          </div>
        </div>
        <Input
          type="number"
          name="sprintAmount"
          label="Hoeveel sprints heb je nodig?"
          className="rounded-full"
          min={1}
          value={1}
          onChange={(e: any) => console.log(e)}
        />
      </div>
      <Input
        name="sprintDate"
        type="date"
        className="rounded-full"
        defaultValue={selectedDate}
        minDate={nextWeek}
        label="Wanneer wil je starten"
        onChange={(e: any) => setSelectedDate(new Date(e))}
      />
    </div>
  );
};

export default TeamTwo;
