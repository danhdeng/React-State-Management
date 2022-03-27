import React, { useCallback, useState } from 'react';

export const useSelectorStore = () => {
  const [user, setUser] = useState('');
  const [cartCount, setCartCount] = useState(0);
  return {
    user,
    cartCount,
    login: useCallback(() => setUser('Welcome to Ecommerce Store: Dan'), []),
    logout: useCallback(() => setUser(''), []),
    addToCart: useCallback(() => setCartCount((v) => v + 1), []),
  };
};
