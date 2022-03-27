import React, { useState } from 'react';

export const useStore = () => {
  const [user, setUser] = useState('');
  const [cartCount, setCartCount] = useState(0);
  return {
    user,
    cartCount,
    login: () => setUser('Dan'),
    logout: () => setUser(''),
    addToCart: () => setCartCount(cartCount + 1),
  };
};
