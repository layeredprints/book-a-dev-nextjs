import React from 'react';
import { Formik, Form as FormikForm } from 'formik';

import { Container } from './styles';

interface Props {
  initialValues: any;
  children: any;
  actions: any;
  onSubmit: (values: any) => void;
  submitLabel?: string;
}

const Form = (props: Props): JSX.Element => {
  const { initialValues, children, onSubmit, actions } = props;

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <FormikForm>
          {children}
          {actions}
        </FormikForm>
      </Formik>
    </Container>
  );
};

export default Form;
