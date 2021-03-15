import { Formik } from 'formik';
import {
  find, isEmpty, map, some,
} from 'lodash';
import { useContext, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { WizardContext } from '../../../../contextApi/WizardProvider';
import c from '../../../../utils/c';
import Input from '../../../Input';
import Title from '../../../Title';
import WizardNavigation from '../../_partials/WizardNavigation';

const ProjectTwo = ({
  step,
  service,
  setStep,
} : {
  step: number,
  service: string,
  setStep: (n: number) => void,
}) => {
  const {
    teamInfo,
    submitTeamInfo,
  } = useContext(WizardContext);
  const deliveries = [{
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

  const initSelected = (selected: any[]) => {
    if (!isEmpty(selected)) {
      return selected;
    }
    return map(deliveries, ({ value }) => ({
      name: value,
      selected: false,
    }));
  };
  const [selectedDeliveries, setSelectedDeliveries] = useState(initSelected(teamInfo.selectedDeliveries));

  const toggleSelected = (v: string) => {
    const copySelected = { ...selectedDeliveries };
    const selectObject = find(copySelected, { name: v });
    selectObject.selected = !selectObject.selected;
    setSelectedDeliveries(copySelected);
  };

  const selectedSchema = Yup.object().shape({
    name: Yup.string(),
    selected: Yup.bool(),
  });

  const formValidationSchema = Yup.object().shape({
    selectedDeliveries: selectedSchema.test(
      'has-selected',
      'Please select one technologie',
      (values: any) => some(values, 'selected'),
    ).required(),
  });

  return (
    <article>
      <header>
        <Title
          heading="h3"
          text="Wat moeten wij opleveren?"
        />
        <p>U kan meerdere opties aanduiden</p>
      </header>
      <Formik
        enableReinitialize
        validateOnMount
        initialValues={{
          selectedDeliveries,
        }}
        validationSchema={formValidationSchema}
        onSubmit={(values: any) => {
          submitTeamInfo(values.selectedDeliveries);
        }}
      >
        {({
          values,
          isValid,
          handleChange,
          handleSubmit,
        }) => (
          <form>
            <div className="flex">
              {map(deliveries, ({ value: v, label }) => {
                const selectObject = find(selectedDeliveries, { name: v });
                const { name } = find(values.selectedDeliveries, { name: v });
                return (
                  <Input
                    name="selectedTechnologies"
                    type="customcheckbox"
                    onChange={(e: any) => {
                      toggleSelected(e.target.value);
                      handleChange({
                        type: 'change',
                        target: {
                          name: 'selectedDeliveries',
                          value: selectedDeliveries,
                        },
                      });
                    }}
                    value={name}
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
            <WizardNavigation
              step={step}
              service={service}
              setStep={setStep}
              onNext={handleSubmit}
              isValid={isValid}
            />
          </form>
        )}
      </Formik>
    </article>
  );
};

export default ProjectTwo;
