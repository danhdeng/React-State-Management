import React from 'react';
import { useCartCount } from '../../../customHooks/ecommerce/useCartCount';

export const CartCountSection = () => {
  const cartCount = useCartCount();
  return <div>Cart Count: {cartCount}</div>;
};
