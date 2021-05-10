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

const Skills = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const { onPrev, onNext } = props;

  const initialValues = useMemo(
    () => ({
      ['skills']: [],
      ['skillsExtra']: '',
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
      <Title>{t('components.wizard.views.skills.title')}</Title>
      <Form initialValues={initialValues} onSubmit={onNext} actions={actions}>
        <Fieldset>
          <Input.Checkbox
            name="skills"
            isRequired={false}
            label={t('components.wizard.views.skills.list.webDevelopment')}
            value={t('components.wizard.views.skills.list.webDevelopment')}
          />
          <Input.Checkbox
            name="skills"
            isRequired={false}
            label={t('components.wizard.views.skills.list.mobileDevelopment')}
            value={t('components.wizard.views.skills.list.mobileDevelopment')}
          />
          <Input.Checkbox
            name="skills"
            isRequired={false}
            label={t('components.wizard.views.skills.list.design')}
            value={t('components.wizard.views.skills.list.design')}
          />
          <Input.Checkbox
            name="skills"
            isRequired={false}
            label={t('components.wizard.views.skills.list.businessAnalyse')}
            value={t('components.wizard.views.skills.list.businessAnalyse')}
          />
          <Input.Checkbox
            name="skills"
            isRequired={false}
            label={t('components.wizard.views.skills.list.functionalAnalyse')}
            value={t('components.wizard.views.skills.list.functionalAnalyse')}
          />
          <Input.Checkbox
            name="skills"
            isRequired={false}
            label={t('components.wizard.views.skills.list.productManagement')}
            value={t('components.wizard.views.skills.list.productManagement')}
          />
          <Input.Checkbox
            name="skills"
            isRequired={false}
            label={t('components.wizard.views.skills.list.blockchain')}
            value={t('components.wizard.views.skills.list.blockchain')}
          />
          <Input.Checkbox
            name="skills"
            isRequired={false}
            label={t('components.wizard.views.skills.list.bigData')}
            value={t('components.wizard.views.skills.list.bigData')}
          />
          <Input.Checkbox
            name="skills"
            isRequired={false}
            label={t('components.wizard.views.skills.list.ai')}
            value={t('components.wizard.views.skills.list.ai')}
          />
          <Input.Checkbox
            name="skills"
            isRequired={false}
            label={t('components.wizard.views.skills.list.machineLearning')}
            value={t('components.wizard.views.skills.list.machineLearning')}
          />
          <Input.Checkbox
            name="skills"
            isRequired={false}
            label={t('components.wizard.views.skills.list.chatbots')}
            value={t('components.wizard.views.skills.list.chatbots')}
          />
          <Input.Checkbox
            name="skills"
            isRequired={false}
            label={t('components.wizard.views.skills.list.3dprinting')}
            value={t('components.wizard.views.skills.list.3dprinting')}
          />
        </Fieldset>
      </Form>
    </Container>
  );
};

export default Skills;
