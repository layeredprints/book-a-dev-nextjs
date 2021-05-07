import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'src/components/Form';
import InputEnum from 'src/enums/Input';

import { Container, Title } from './styles';

interface Props {
  onChange: (data: any) => void;
}

const Product = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const { onChange } = props;

  const inputs = useMemo(
    () => [
      {
        id: '0',
        name: 'productType',
        type: InputEnum.Text,
        isRequired: true,
      },
      {
        id: '1',
        name: 'productExample',
        label: t('components.form.label.productExample'),
        placeholder: t('components.form.placeholder.productExample'),
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
      <Title>{t('components.wizard.views.product.title')}</Title>
      <Form
        inputs={inputs}
        onSubmit={onChange}
        submitLabel={t('labels.next')}
      />
    </Container>
  );
};

export default Product;
