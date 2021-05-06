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

  const fields = useMemo(
    () => [
      {
        key: 'sprintPeriod',
        label: t('components.form.label.sprintPeriod'),
        placeholder: t('components.form.placeholder.sprintPeriod'),
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        key: 'sprintCount',
        label: t('components.form.label.sprintCount'),
        placeholder: t('components.form.placeholder.sprintCount'),
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        key: 'sprintStart',
        label: t('components.form.label.sprintStart'),
        placeholder: t('components.form.placeholder.sprintStart'),
        type: InputEnum.Text,
        isRequired: true,
      },
    ],
    [t],
  );

  return (
    <Container>
      <Title>{t('components.wizard.views.sprints.title')}</Title>
      <Form fields={fields} onSubmit={onChange} />
    </Container>
  );
};

export default Sprints;
