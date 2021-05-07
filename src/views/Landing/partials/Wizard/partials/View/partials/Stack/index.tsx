import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'src/components/Form';
import InputEnum from 'src/enums/Input';

import { Container, Title } from './styles';
interface Props {
  onChange: (data: any) => void;
}

const Stack = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const { onChange } = props;

  const inputs = useMemo(
    () => [
      {
        id: '0',
        name: 'stackTechnologies',
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        id: '1',
        name: 'stackTechnologiesExtra',
        label: t('components.form.label.stackTechnologiesExtra'),
        placeholder: t('components.form.placeholder.stackTechnologiesExtra'),
        type: InputEnum.Text,
        isRequired: false,
      },
    ],
    [t],
  );

  return (
    <Container>
      <Title>{t('components.wizard.views.stack.title')}</Title>
      <Form inputs={inputs} onSubmit={onChange} />
    </Container>
  );
};

export default Stack;
