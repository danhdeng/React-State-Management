import { CounterPageProps } from '../../../types/counterPageProps';
import React from 'react';
import { StoreContext } from '../../../context/storeContext';
import { useStore } from '../../../customHooks/storeZustand/useStore';

export const StoreContextProvider = ({ children }: CounterPageProps) => {
  return (
    <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
  );
};
