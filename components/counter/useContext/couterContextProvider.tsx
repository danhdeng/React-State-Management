import { useState } from 'react';
import { CounterPageProps } from '../../../types/counterPageProps';
import { CounterContext } from '../../../context/counterContext';

export const CountContextProvider = ({ children }: CounterPageProps) => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
