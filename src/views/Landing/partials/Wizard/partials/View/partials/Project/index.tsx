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

  const inputs = useMemo(
    () => [
      {
        id: '0',
        name: 'projectSize',
        label: t('components.form.label.projectSize'),
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        id: '1',
        name: 'projectTiming',
        label: t('components.form.label.projectTiming'),
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        id: '2',
        name: 'projectStart',
        label: t('components.form.label.projectStart'),
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
      <Title>{t('components.wizard.views.project.title')}</Title>
      <Form
        inputs={inputs}
        onSubmit={onChange}
        submitLabel={t('labels.next')}
      />
    </Container>
  );
};

export default Project;
