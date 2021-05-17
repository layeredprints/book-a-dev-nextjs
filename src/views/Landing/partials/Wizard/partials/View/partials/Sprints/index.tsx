import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/Button';
import Form from 'src/components/Form';
import Input from 'src/components/Input';

import { Container, Title, Fieldset, Actions, Counter, Label } from './styles';

interface Props {
  data: any;
  onPrev: () => void;
  onNext: (data: any) => void;
}

const Sprints = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const { data, onPrev, onNext } = props;
  const {
    sprintPeriodCount,
    sprintPeriodType,
    sprintCount,
    sprintStart,
  } = data;

  const initialValues = useMemo(
    () => ({
      sprintPeriodCount: sprintPeriodCount ? sprintPeriodCount : 1,
      sprintPeriodType: sprintPeriodType ? sprintPeriodType : '',
      sprintCount: sprintCount ? sprintCount : 8,
      sprintStart: sprintStart ? sprintStart : '',
    }),
    [sprintPeriodCount, sprintPeriodType, sprintCount, sprintStart],
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
          <Label>{t('components.form.label.sprintPeriod')}</Label>
          <Counter>
            <Input.Number name="sprintPeriodCount" isRequired={true} />
            <Input.Select
              name="sprintPeriodType"
              isRequired={true}
              options={[
                {
                  id: 0,
                  label: t('labels.week'),
                  value: t('labels.week'),
                },
                {
                  id: 1,
                  label: t('labels.month'),
                  value: t('labels.month'),
                },
              ]}
            />
          </Counter>
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
