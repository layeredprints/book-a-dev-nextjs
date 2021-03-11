import { find, map } from 'lodash';
import { useEffect, useState } from 'react';
import c from '../../../../utils/c';
import Input from '../../../Input';
import Title from '../../../Title';

const ProjectTwo = () => {
  const [selected, setSelected] = useState([]);
  const types = [{
    value: 'requirements',
    label: 'Requirements',
  }, {
    value: 'design',
    label: 'Design',
  }, {
    value: 'frontend',
    label: 'Front-end',
  }, {
    value: 'backend',
    label: 'Back-end',
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
      <Title
        heading="h3"
        text="Wat moeten wij opleveren?"
      />
      <p>U kan meerdere opties aanduiden</p>
      <div className="flex">
        {map(types, ({ value: v, label }) => {
          const selectObject = find(selected, { name: v });
          return (
            <Input
              name="projectType"
              type="customcheckbox"
              onChange={(e: any) => toggleSelected(e.target.value)}
              value={v}
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
    </div>
  );
};

export default ProjectTwo;
