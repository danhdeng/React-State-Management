import React from 'react';
import { AddToCartSection } from './addToCartSection';
import { CartCountSection } from './cartCountSection';
import { EcommerceContextProvider } from './ecommerceContextProvider';
import { LoginSection } from './loginSection';
import { UserSection } from './userSection';

export const ContextPage = () => {
  return (
    <EcommerceContextProvider>
      <LoginSection />
      <UserSection />
      <AddToCartSection />
      <CartCountSection />
    </EcommerceContextProvider>
  );
};
