import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Form from 'src/components/Form';
import Section from 'src/components/Section';
import InputEnum from 'src/enums/Input';

import { Container, Content, Title } from './styles';

interface Props {
  handleSubmitForm: (data: any) => void;
}

const Questions = (props: Props): JSX.Element => {
  const { handleSubmitForm } = props;
  const [error] = useState('');
  const { t } = useTranslation();

  const fields = useMemo(
    () => [
      {
        key: 'name',
        label: t('components.form.label.name'),
        placeholder: t('components.form.placeholder.name'),
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        key: 'email',
        label: t('components.form.label.email'),
        placeholder: t('components.form.placeholder.email'),
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        key: 'question',
        label: t('components.form.label.question'),
        placeholder: t('components.form.placeholder.question'),
        type: InputEnum.Text,
        isRequired: true,
      },
    ],
    [t],
  );

  return (
    <Section>
      <Container>
        <Content>
          <Title>{t('views.home.form.title')}</Title>
          <Form
            fields={fields}
            onSubmit={handleSubmitForm}
            requestError={error}
            submitLabel={t('labels.submit')}
          />
        </Content>
      </Container>
    </Section>
  );
};

export default Questions;
