import React from 'react';
import { StoreContext } from '../../../context/storeContext';
import { useStore } from '../../../customHooks/store/useStore';
import { CounterPageProps } from '../../../types/counterPageProps';

export const StoreContextProvider = ({ children }: CounterPageProps) => {
  return (
    <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
  );
};
