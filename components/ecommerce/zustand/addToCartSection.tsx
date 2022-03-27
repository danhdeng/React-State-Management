import React from 'react';
import { useAddToCart } from '../../../customHooks/storeZustand/useAddToCart';

export const AddToCartSection = () => {
  const addToCart = useAddToCart();
  return (
    <div>
      <button type="button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};
