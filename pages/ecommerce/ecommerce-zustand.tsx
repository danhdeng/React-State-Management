import React from 'react';
import { AddToCartSection } from '../../components/ecommerce/zustand/addToCartSection';
import { CartCountSection } from '../../components/ecommerce/zustand/cartCountSection';
import { LoginSection } from '../../components/ecommerce/zustand/loginSection';
import { UserSection } from '../../components/ecommerce/zustand/userSection';

export default function EcommerceZustandPage() {
  return (
    <div>
      <LoginSection />
      <UserSection />
      <AddToCartSection />
      <CartCountSection />
    </div>
  );
}
