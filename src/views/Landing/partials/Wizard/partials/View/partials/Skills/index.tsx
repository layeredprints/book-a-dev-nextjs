import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'src/components/Form';
import InputEnum from 'src/enums/Input';

import { Container, Title } from './styles';

interface Props {
  onChange: (data: any) => void;
}

const Skills = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const { onChange } = props;

  const fields = useMemo(
    () => [
      {
        key: 'skills',
        label: '',
        placeholder: '',
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        key: 'skillsExtra',
        label: t('components.form.label.skillsExtra'),
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

export default Skills;
