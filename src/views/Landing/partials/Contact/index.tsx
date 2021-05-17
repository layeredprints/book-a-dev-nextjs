import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Section from 'src/components/Section';
import Form from 'src/components/Form';
import Input from 'src/components/Input';

import { Container, Content, Title, Actions, Fieldset } from './styles';

interface Props {
  onSubmitData: (data: any) => void;
  contactRef: any;
}

const Contact = (props: Props): JSX.Element => {
  const { onSubmitData, contactRef } = props;
  const { t } = useTranslation();

  const initialValues = useMemo(
    () => ({
      ['phone']: '',
      ['email']: '',
      ['info']: '',
    }),
    [],
  );

  const actions = useMemo(
    () => (
      <Actions>
        <Input.Submit label="ignite!" />
      </Actions>
    ),
    [],
  );

  return (
    <Section sectionRef={contactRef}>
      <Container>
        <Content>
          <Title>{t('views.home.form.title')}</Title>
          <Form
            initialValues={initialValues}
            onSubmit={onSubmitData}
            actions={actions}
          >
            <Fieldset>
              <Input.Tel
                name="name"
                isRequired={true}
                label={t('components.form.label.name')}
                placeholder={t('components.form.placeholder.name')}
              />
              <Input.Email
                name="email"
                isRequired={true}
                label={t('components.form.label.email')}
                placeholder={t('components.form.placeholder.email')}
              />
            </Fieldset>
            <Fieldset>
              <Input.TextArea
                name="question"
                isRequired={true}
                label={t('components.form.label.question')}
                placeholder={t('components.form.placeholder.question')}
              />
            </Fieldset>
          </Form>
        </Content>
      </Container>
    </Section>
  );
};

export default Contact;
