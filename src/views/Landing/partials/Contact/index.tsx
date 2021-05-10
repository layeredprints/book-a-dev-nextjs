import React, { useMemo } from 'react';
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
  const { t } = useTranslation();

  const fields = useMemo(
    () => [
      [
        {
          id: '0',
          name: 'name',
          type: InputEnum.Text,
          isRequired: true,
          label: t('components.form.label.name'),
          placeholder: t('components.form.placeholder.name'),
        },
        {
          id: '1',
          name: 'email',
          type: InputEnum.Email,
          isRequired: true,
          label: t('components.form.label.email'),
          placeholder: t('components.form.placeholder.email'),
        },
        {
          id: '2',
          name: 'question',
          type: InputEnum.Text,
          isRequired: true,
          label: t('components.form.label.question'),
          placeholder: t('components.form.placeholder.question'),
        },
        {
          id: '3',
          name: 'submit',
          type: InputEnum.Submit,
          isRequired: true,
          value: t('labels.submit'),
        },
      ],
    ],
    [t],
  );

  return (
    <Section sectionRef={contactRef}>
      <Container>
        <Content>
          <Title>{t('views.home.form.title')}</Title>
          <Form fields={fields} onSubmit={onSubmitData} />
        </Content>
      </Container>
    </Section>
  );
};

export default Contact;
