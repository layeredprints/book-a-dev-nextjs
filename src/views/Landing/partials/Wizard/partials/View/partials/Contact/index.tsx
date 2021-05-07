import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'src/components/Form';
import InputEnum from 'src/enums/Input';

import { Container, Title } from './styles';

interface Props {
  onChange: (data: any) => void;
}

const Contact = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const { onChange } = props;

  const inputs = useMemo(
    () => [
      {
        id: '0',
        name: 'phone',
        label: t('components.form.label.phone'),
        placeholder: t('components.form.placeholder.phone'),
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        id: '1',
        name: 'email',
        label: t('components.form.label.email'),
        placeholder: t('components.form.placeholder.email'),
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        id: '2',
        name: 'info',
        label: t('components.form.label.info'),
        placeholder: t('components.form.placeholder.info'),
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        id: 'X',
        name: 'submit',
        type: InputEnum.Submit,
        isRequired: true,
        value: t('labels.submit'),
      },
    ],
    [t],
  );

  return (
    <Container>
      <Title>{t('components.wizard.views.contact.title')}</Title>
      <Form
        inputs={inputs}
        onSubmit={onChange}
        submitLabel={t('labels.next')}
      />
    </Container>
  );
};

export default Contact;
