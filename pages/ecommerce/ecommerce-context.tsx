import React from 'react';
import { ContextPage } from '../../components/ecommerce/store/contextPage';
import { StoreContextProvider } from '../../components/ecommerce/store/storeContextProvider';

export default function StoreContextPage() {
  return (
    <StoreContextProvider>
      <ContextPage />
    </StoreContextProvider>
  );
}
