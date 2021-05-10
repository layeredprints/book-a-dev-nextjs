import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'src/components/Form';
import Input from 'src/components/Input';

import { Container, Fieldset, Title, Actions } from './styles';

interface Props {
  onNext: (data: any) => void;
}

const Product = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const { onNext } = props;

  const initialValues = useMemo(
    () => ({
      ['productType']: [],
      ['productExample']: '',
    }),
    [],
  );

  const actions = useMemo(
    () => (
      <Actions>
        <Input.Submit label={t('labels.next')} />
      </Actions>
    ),
    [t],
  );

  return (
    <Container>
      <Title>{t('components.wizard.views.product.title')}</Title>
      <Form initialValues={initialValues} onSubmit={onNext} actions={actions}>
        <Fieldset>
          <Input.Checkbox
            name="productType"
            value="Mobile"
            label="Mobile"
            icon="assets/glyphs/product-mobile.svg"
            isRequired={false}
          />
          <Input.Checkbox
            name="productType"
            value="Web"
            label="Web"
            icon="assets/glyphs/product-web.svg"
            isRequired={false}
          />
          <Input.Checkbox
            name="productType"
            value="API"
            label="API"
            icon="assets/glyphs/product-api.svg"
            isRequired={false}
          />
        </Fieldset>
        <Fieldset>
          <Input.Text
            name="productExample"
            isRequired={false}
            label={t('components.form.label.productExample')}
            placeholder={t('components.form.placeholder.productExample')}
          />
        </Fieldset>
      </Form>
    </Container>
  );
};

export default Product;
