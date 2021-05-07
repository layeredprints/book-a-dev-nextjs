import React, { useMemo } from 'react';
import { Formik, Form as FormikForm } from 'formik';

import { InputType } from 'src/types/Input';
import InputEnum from 'src/enums/Input';

import {
  Submit,
  Text,
  Email,
  Password,
  Number,
  Checkbox,
  Radio,
} from './partials';
import { Container } from './styles';

interface Props {
  inputs: InputType[];
  onSubmit: (values: any) => void;
  submitLabel?: string;
}

const Form = (props: Props): JSX.Element => {
  const { inputs, onSubmit, submitLabel } = props;

  const initialValues = useMemo(() => {
    const values: any = {};

    inputs.forEach((input: InputType) => {
      switch (input.type) {
        case InputEnum.Text:
          return (values[input.name] = '');
        case InputEnum.Email:
          return (values[input.name] = '');
        case InputEnum.Password:
          return (values[input.name] = '');
        case InputEnum.Number:
          return (values[input.name] = 0);
        case InputEnum.Checkbox:
          return (values[input.name] = []);
        case InputEnum.Radio:
          return (values[input.name] = '');
        case InputEnum.Submit:
          return (values[input.name] = 'submit');
        default:
          return null;
      }
    });

    return values;
  }, [inputs]);

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <FormikForm>
          {inputs.map((input: InputType) => {
            switch (input.type) {
              case InputEnum.Text:
                return <Text key={input.id} input={input} />;
              case InputEnum.Email:
                return <Email key={input.id} input={input} />;
              case InputEnum.Password:
                return <Password key={input.id} input={input} />;
              case InputEnum.Number:
                return <Number key={input.id} input={input} />;
              case InputEnum.Checkbox:
                return <Checkbox key={input.id} input={input} />;
              case InputEnum.Radio:
                return <Radio key={input.id} input={input} />;
              case InputEnum.Submit:
                return (
                  <Submit key={input.id} input={input} label={submitLabel} />
                );
              default:
                return null;
            }
          })}
        </FormikForm>
      </Formik>
    </Container>
  );
};

export default Form;
