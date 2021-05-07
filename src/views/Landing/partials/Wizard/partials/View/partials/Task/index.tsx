import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'src/components/Form';
import InputEnum from 'src/enums/Input';

import { Container, Title } from './styles';

interface Props {
  onChange: (data: any) => void;
}

const Task = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const { onChange } = props;

  const inputs = useMemo(
    () => [
      {
        id: '0',
        name: 'taskType',
        type: InputEnum.Text,
        isRequired: true,
      },
    ],
    [],
  );

  return (
    <Container>
      <Title>{t('components.wizard.views.task.title')}</Title>
      <Form inputs={inputs} onSubmit={onChange} />
    </Container>
  );
};

export default Task;
