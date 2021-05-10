import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/Button';
import Form from 'src/components/Form';
import Input from 'src/components/Input';

import { Container, Title, Fieldset, Actions } from './styles';

interface Props {
  onPrev: () => void;
  onNext: (data: any) => void;
}

const Sprints = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const { onPrev, onNext } = props;

  const initialValues = useMemo(
    () => ({
      ['sprintPeriod']: '',
      ['sprintCount']: 0,
      ['sprintStart']: '',
    }),
    [],
  );

  const actions = useMemo(
    () => (
      <Actions>
        <Button.Secondary onClick={onPrev}>
          {t('labels.previous')}
        </Button.Secondary>
        <Input.Submit label={t('labels.next')} />
      </Actions>
    ),
    [onPrev, t],
  );

  return (
    <Container>
      <Title>{t('components.wizard.views.sprints.title')}</Title>
      <Form initialValues={initialValues} onSubmit={onNext} actions={actions}>
        <Fieldset>
          <Input.Text
            name="sprintPeriod"
            isRequired={true}
            label={t('components.form.label.sprintPeriod')}
            placeholder={t('components.form.placeholder.sprintPeriod')}
          />
        </Fieldset>
        <Fieldset>
          <Input.Number
            name="sprintCount"
            isRequired={true}
            label={t('components.form.label.sprintCount')}
            placeholder={t('components.form.placeholder.sprintCount')}
          />
        </Fieldset>
        <Fieldset>
          <Input.Date
            name="sprintStart"
            isRequired={true}
            label={t('components.form.label.sprintStart')}
          />
        </Fieldset>
      </Form>
    </Container>
  );
};

export default Sprints;
