import React, { useState } from 'react';
import { CounterContext } from '../../../context/counterContext';
import { CounterPageProps } from '../../../types/counterPageProps';
import { AddOneButton } from './addOneButton';
import { Container } from './container';
import { Counter } from './counter';
// const SetCounterContext = createContext<null | React.Dispatch<
//   React.SetStateAction<number>
// >>(null);
const CountContextProvider = ({ children }: CounterPageProps) => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
export const CounterUseContext = () => {
  return (
    <CountContextProvider>
      <Container>
        <AddOneButton />
        <Counter></Counter>
      </Container>
    </CountContextProvider>
  );
};
