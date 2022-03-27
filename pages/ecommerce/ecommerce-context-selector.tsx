import React from 'react';
import { ContextPage } from '../../components/ecommerce/ecommerce/contextPage';
import { EcommerceContextProvider } from '../../components/ecommerce/ecommerce/ecommerceContextProvider';

export default function EcommerceContextSelectorPage() {
  return (
    <EcommerceContextProvider>
      <ContextPage />
    </EcommerceContextProvider>
  );
}
