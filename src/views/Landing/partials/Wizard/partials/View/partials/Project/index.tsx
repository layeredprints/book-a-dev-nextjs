import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'src/components/Form';
import InputEnum from 'src/enums/Input';

import { Container, Title } from './styles';

interface Props {
  onChange: (data: any) => void;
}

const Project = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const { onChange } = props;

  const fields = useMemo(
    () => [
      {
        key: 'projectSize',
        label: t('components.form.label.projectSize'),
        placeholder: '',
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        key: 'projectTiming',
        label: t('components.form.label.projectTiming'),
        placeholder: '',
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        key: 'projectStart',
        label: t('components.form.label.projectStart'),
        placeholder: '',
        type: InputEnum.Text,
        isRequired: true,
      },
    ],
    [t],
  );

  return (
    <Container>
      <Title>{t('components.wizard.views.project.title')}</Title>
      <Form fields={fields} onSubmit={onChange} />
    </Container>
  );
};

export default Project;
