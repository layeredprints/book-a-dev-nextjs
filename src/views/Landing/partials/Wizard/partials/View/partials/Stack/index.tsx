import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'src/components/Form';
import Input from 'src/components/Input';

import { Container, Fieldset, Title, Subtitle, Actions } from './styles';
interface Props {
  onNext: (data: any) => void;
}

const Stack = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const { onNext } = props;

  const initialValues = useMemo(
    () => ({
      ['stackTechnologies']: [],
      ['stackTechnologiesExtra']: '',
    }),
    [],
  );

  const actions = useMemo(
    () => (
      <Actions>
        <Input.Submit label={t('labels.next')} />
      </Actions>
    ),
    [t],
  );

  return (
    <Container>
      <Title>{t('components.wizard.views.stack.title')}</Title>
      <Subtitle>{t('components.wizard.views.stack.subtitle')}</Subtitle>
      <Form initialValues={initialValues} onSubmit={onNext} actions={actions}>
        <Fieldset>
          <Input.Checkbox
            name="stackTechnologies"
            value="Node.js"
            label="Node.js"
            icon="assets/glyphs/technologies-node.svg"
            isRequired={false}
          />
          <Input.Checkbox
            name="stackTechnologies"
            value="PHP"
            label="PHP"
            icon="assets/glyphs/technologies-php.svg"
            isRequired={false}
          />
          <Input.Checkbox
            name="stackTechnologies"
            value="C/C++"
            label="C/C++"
            icon="assets/glyphs/technologies-cplus.svg"
            isRequired={false}
          />
          <Input.Checkbox
            name="stackTechnologies"
            value="C#"
            label="C#"
            icon="assets/glyphs/technologies-csharp.svg"
            isRequired={false}
          />
          <Input.Checkbox
            name="stackTechnologies"
            value=".NET"
            label=".NET"
            icon="assets/glyphs/technologies-net.svg"
            isRequired={false}
          />
          <Input.Checkbox
            name="stackTechnologies"
            value="React.js"
            label="React.js"
            icon="assets/glyphs/technologies-react.svg"
            isRequired={false}
          />
          <Input.Checkbox
            name="stackTechnologies"
            value="Angular"
            label="Angular"
            icon="assets/glyphs/technologies-node.svg"
            isRequired={false}
          />
          <Input.Checkbox
            name="stackTechnologies"
            value="No Preference"
            label={t('labels.noPreference')}
            icon="assets/glyphs/technologies-no.svg"
            isRequired={false}
          />
        </Fieldset>
        <Fieldset>
          <Input.Text
            name="stackTechnologiesExtra"
            isRequired={false}
            label={t('components.form.label.stackTechnologiesExtra')}
            placeholder={t(
              'components.form.placeholder.stackTechnologiesExtra',
            )}
          />
        </Fieldset>
      </Form>
    </Container>
  );
};

export default Stack;
