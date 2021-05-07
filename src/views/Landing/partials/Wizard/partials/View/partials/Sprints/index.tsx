import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'src/components/Form';
import InputEnum from 'src/enums/Input';

import { Container, Title } from './styles';

interface Props {
  onChange: (data: any) => void;
}

const Sprints = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const { onChange } = props;

  const inputs = useMemo(
    () => [
      {
        id: '0',
        name: 'sprintPeriod',
        label: t('components.form.label.sprintPeriod'),
        placeholder: t('components.form.placeholder.sprintPeriod'),
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        id: '1',
        name: 'sprintCount',
        label: t('components.form.label.sprintCount'),
        placeholder: t('components.form.placeholder.sprintCount'),
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        id: '2',
        name: 'sprintStart',
        label: t('components.form.label.sprintStart'),
        placeholder: t('components.form.placeholder.sprintStart'),
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
      <Title>{t('components.wizard.views.sprints.title')}</Title>
      <Form
        inputs={inputs}
        onSubmit={onChange}
        submitLabel={t('labels.next')}
      />
    </Container>
  );
};

export default Sprints;
