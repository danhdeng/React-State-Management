import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { ICounterContext } from '../../../interfaces/ICounterContext';
import { CounterPageProps } from '../../../types/counterPageProps';
import { AddOneButton } from './addOneButton';
import { Container } from './container';
import { Counter } from './counter';
export const CounterContext = createContext<ICounterContext | null>(null);
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
