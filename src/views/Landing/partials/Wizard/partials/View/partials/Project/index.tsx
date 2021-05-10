import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/Button';
import Form from 'src/components/Form';
import Input from 'src/components/Input';

import { Container, Fieldset, Title, Actions, Label } from './styles';

interface Props {
  onPrev: () => void;
  onNext: (data: any) => void;
}

const Project = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const { onPrev, onNext } = props;

  const initialValues = useMemo(
    () => ({
      ['projectSize']: '',
      ['projectTiming']: '',
      ['projectStart']: '',
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
      <Title>{t('components.wizard.views.project.title')}</Title>
      <Form initialValues={initialValues} onSubmit={onNext} actions={actions}>
        <Fieldset>
          <Label>{t('components.wizard.views.project.size.title')}</Label>
          <div>
            <Input.Radio
              name="projectSize"
              value="Small"
              label="Small"
              icon="assets/glyphs/project-size-small.svg"
              isRequired={true}
            />
            <Input.Radio
              name="projectSize"
              value="Medium"
              label="Medium"
              icon="assets/glyphs/project-size-medium.svg"
              isRequired={true}
            />
            <Input.Radio
              name="projectSize"
              value="Big"
              label="Big"
              icon="assets/glyphs/project-size-big.svg"
              isRequired={true}
            />
          </div>
        </Fieldset>
        <Fieldset>
          <Label>{t('components.wizard.views.project.timing.title')}</Label>
          <div>
            <Input.Radio
              name="projectTiming"
              value="Slow"
              label="Slow"
              icon="assets/glyphs/project-size-small.svg"
              isRequired={true}
            />
            <Input.Radio
              name="projectTiming"
              value="Medium"
              label="Medium"
              icon="assets/glyphs/project-size-medium.svg"
              isRequired={true}
            />
            <Input.Radio
              name="projectTiming"
              value="Fast"
              label="Fast"
              icon="assets/glyphs/project-size-big.svg"
              isRequired={true}
            />
          </div>
        </Fieldset>
        <Fieldset>
          <Input.Date
            name="projectStart"
            isRequired={true}
            label={t('components.form.label.projectStart')}
          />
        </Fieldset>
      </Form>
    </Container>
  );
};

export default Project;
