import { find, map } from 'lodash';
import { useContext, useEffect, useState } from 'react';
import c from '../../../../utils/c';
import Input from '../../../Input';
import Title from '../../../Title';
import { WizardContext } from '../../../../contextApi/WizardProvider';

const ProjectOne = () => {
  const {
    projectInfo,
    onGeneralInfoChange,
  } = useContext(WizardContext);
  const [selected, setSelected] = useState([]);
  const [added, setAdded] = useState([]);
  const types = [{
    value: 'mobileApp',
    label: 'Mobiele applicatie',
  }, {
    value: 'webApp',
    label: 'Web applicatie',
  }, {
    value: 'api',
    label: 'API',
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
        text="Wat wil je bouwen?"
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
      <Title
        heading="h3"
        text="Bestaat er al iets?"
      />
      <p>Voeg hieronder een link toe naar het project</p>
      <Input
        type="text"
        placeholder="www.website.com"
        name="added"
        className="rounded-full"
        onChange={(e: any) => setAdded(e)}
      />
    </div>
  );
};

export default ProjectOne;
