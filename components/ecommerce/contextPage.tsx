import React from 'react';
import { AddToCartSection } from './addToCartSection';
import { CartCountSection } from './cartCountSection';
import { LoginSection } from './loginSection';
import { UserSection } from './userSection';

export const ContextPage = () => {
  return (
    <div>
      <LoginSection />
      <UserSection />
      <AddToCartSection />
      <CartCountSection />
    </div>
  );
};
