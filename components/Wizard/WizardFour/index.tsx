import { find, map } from 'lodash';
import { useEffect, useState } from 'react';
import c from '../../../utils/c';
import Input from '../../Input';
import Title from '../../Title';

const index = ({
  step,
  setStep,
  service,
  setService,
} : {
  step: number,
  setStep: (e: number) => void,
  service,
  setService: (s: string) => void,
}) => {
  const [selected, setSelected] = useState([]);
  const [added, setAdded] = useState([]);
  const types = [{
    value: 'web_dev',
    label: 'Web Development',
  }, {
    value: 'mobile_dev',
    label: 'Mobile Development',
  }, {
    value: 'design',
    label: 'Design (UI / UX)',
  }, {
    value: 'business_analyse',
    label: 'Business Analyse',
  }, {
    value: 'functional_analyse',
    label: 'Functionele Analyse',
  }, {
    value: 'prod_management',
    label: 'Product Management',
  }, {
    value: 'blockchain',
    label: 'Blockchain',
  }, {
    value: 'big_data',
    label: 'Big Data',
  }, {
    value: 'ai',
    label: 'Artificial Intelligence',
  }, {
    value: 'machine_learning',
    label: 'Machine Learning',
  }, {
    value: 'chatbots',
    label: 'Chatbots',
  }, {
    value: 'printing',
    label: '3D printing',
  }];
  useEffect(() => {
    const initSelected = map(types, ({ value }) => ({
      name: value,
      selected: false,
    }));
    setSelected(initSelected);
  }, []);
  const toggleSelected = (v: string) => {
    const copySelected = { ...selected };
    const selectObject = find(copySelected, { name: v });
    selectObject.selected = !selectObject.selected;
    setSelected(copySelected);
  };
  return (
    <div>
      <div className="flex">
        {map(types, ({ value, label }) => {
          const selectObject = find(selected, { name: value });
          return (
            <Input
              name="projectType"
              type="customcheckbox"
              onChange={(e: any) => toggleSelected(e.target.value)}
              value={value}
            >
              <div className={c('bg-white cursor-pointer', {
                'border border-bx-blue': selectObject && selectObject.selected,
              })}
              >
                {label}
              </div>
            </Input>
          );
        })}
      </div>
      <Title
        heading="h4"
        text="Staat de vaardigheid niet in de lijst?"
      />
      <p>Voeg ze hieronder toe</p>
      <Input
        type="creatable"
        placeholder="Type technology name and press ENTER to add"
        name="extraexperience"
        className="bg-white rounded-full"
        onChange={(e: any) => setAdded(e.target.value)}
      />
    </div>
  );
};

export default index;
