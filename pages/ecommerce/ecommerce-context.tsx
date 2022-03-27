import React from 'react';
import { ContextPage } from '../../components/ecommerce/contextPage';
import { StoreContextProvider } from '../../components/ecommerce/storeContextProvider';

export default function StoreContextPage() {
  return (
    <StoreContextProvider>
      <ContextPage />
    </StoreContextProvider>
  );
}
