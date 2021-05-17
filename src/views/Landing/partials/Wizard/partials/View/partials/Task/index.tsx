import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/Button';
import Form from 'src/components/Form';
import Input from 'src/components/Input';

import { Container, Fieldset, Title, Subtitle, Actions } from './styles';

interface Props {
  data: any;
  onPrev: () => void;
  onNext: (data: any) => void;
}

const Task = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const { data, onPrev, onNext } = props;
  const { taskType } = data;

  const initialValues = useMemo(
    () => ({
      taskType: taskType ? taskType : [],
    }),
    [taskType],
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
      <Title>{t('components.wizard.views.task.title')}</Title>
      <Subtitle>{t('components.wizard.views.task.subtitle')}</Subtitle>
      <Form initialValues={initialValues} onSubmit={onNext} actions={actions}>
        <Fieldset>
          <Input.Checkbox
            name="taskType"
            value="Requirements"
            label="Requirements"
            icon="assets/glyphs/deliveries-requirements.svg"
            isRequired={false}
          />
          <Input.Checkbox
            name="taskType"
            value="Design"
            label="Design"
            icon="assets/glyphs/deliveries-design.svg"
            isRequired={false}
          />
          <Input.Checkbox
            name="taskType"
            value="Front-end"
            label="Front-end"
            icon="assets/glyphs/deliveries-frontend.svg"
            isRequired={false}
          />
          <Input.Checkbox
            name="taskType"
            value="Back-end"
            label="Back-end"
            icon="assets/glyphs/deliveries-backend.svg"
            isRequired={false}
          />
        </Fieldset>
      </Form>
    </Container>
  );
};

export default Task;
