import {
  find, findKey, keyBy, keys, map,
} from 'lodash';
import { useEffect, useState } from 'react';
import c from '../../../../utils/c';
import Input from '../../../Input';
import Title from '../../../Title';

const TeamOne = () => {
  const [selected, setSelected] = useState([]);
  const [added, setAdded] = useState([]);
  const technologies = [{
    value: 'java',
    label: 'Java',
  }, {
    value: 'node',
    label: 'node.js',
  }, {
    value: 'php',
    label: 'PHP',
  }, {
    value: 'cplus',
    label: 'C/C++',
  }, {
    value: 'csharp',
    label: 'C#',
  }, {
    value: 'net',
    label: '.NET',
  }, {
    value: 'react',
    label: 'react.js',
  }, {
    value: 'angular',
    label: 'Angular',
  }, {
    value: 'no',
    label: 'Geen voorkeur',
  }];
  useEffect(() => {
    const initSelected = map(technologies, ({ value }) => ({
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
    <article>
      <header>
        <Title
          heading="h3"
          text="Wat is de technologiestack?"
        />
        <p>U kan meerdere opties aanduiden</p>
      </header>
      <div>
        {map(technologies, ({ value: v, label }) => {
          const selectObject = find(selected, { name: v });
          return (
            <Input
              name="technology"
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
      <div>
        <Title
          heading="h4"
          text="Staat de technologie niet in de lijst?"
        />
        <p>Voeg ze hieronder toe</p>
        <Input
          type="creatable"
          placeholder="Type technology name and press ENTER to add"
          name="extratechnologies"
          className="bg-white rounded-full"
          onChange={(e: any) => setAdded(e.target.value)}
        />
      </div>
    </article>
  );
};

export default TeamOne;
