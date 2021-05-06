import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Form from 'src/components/Form';
import Section from 'src/components/Section';
import InputEnum from 'src/enums/Input';

import { Container, Content, Title } from './styles';

interface Props {
  onSubmitData: (data: any) => void;
  contactRef: any;
}

const Contact = (props: Props): JSX.Element => {
  const { onSubmitData, contactRef } = props;
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
    <Section sectionRef={contactRef}>
      <Container>
        <Content>
          <Title>{t('views.home.form.title')}</Title>
          <Form
            fields={fields}
            onSubmit={onSubmitData}
            requestError={error}
            submitLabel={t('labels.submit')}
          />
        </Content>
      </Container>
    </Section>
  );
};

export default Contact;
