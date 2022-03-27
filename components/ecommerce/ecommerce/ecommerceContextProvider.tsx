import React from 'react';
import { UseSelectorContext } from '../../../context/useSelectorContext';
import { useSelectorStore } from '../../../customHooks/ecommerce/useStore';
import { CounterPageProps } from '../../../types/counterPageProps';

export const EcommerceContextProvider = ({ children }: CounterPageProps) => {
  return (
    <UseSelectorContext.Provider value={useSelectorStore()}>
      {children}
    </UseSelectorContext.Provider>
  );
};
