import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'src/components/Button';
import Form from 'src/components/Form';
import Input from 'src/components/Input';

import { Container, Fieldset, Title, Actions } from './styles';

interface Props {
  onPrev: () => void;
  onNext: (data: any) => void;
}

const Contact = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const { onPrev, onNext } = props;

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
        <Button.Secondary onClick={onPrev}>
          {t('labels.previous')}
        </Button.Secondary>
        <Input.Submit label="finish" />
      </Actions>
    ),
    [onPrev, t],
  );

  return (
    <Container>
      <Title>{t('components.wizard.views.contact.title')}</Title>
      <Form initialValues={initialValues} onSubmit={onNext} actions={actions}>
        <Fieldset>
          <Input.Tel
            name="phone"
            isRequired={true}
            label={t('components.form.label.phone')}
            placeholder={t('components.form.placeholder.phone')}
          />
        </Fieldset>
        <Fieldset>
          <Input.Email
            name="email"
            isRequired={true}
            label={t('components.form.label.email')}
            placeholder={t('components.form.placeholder.email')}
          />
        </Fieldset>
        <Fieldset>
          <Input.Text
            name="info"
            isRequired={true}
            label={t('components.form.label.info')}
            placeholder={t('components.form.placeholder.info')}
          />
        </Fieldset>
      </Form>
    </Container>
  );
};

export default Contact;
