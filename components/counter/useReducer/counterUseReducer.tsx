import React, { useReducer } from 'react';
import { UseReducerContext } from '../../../context/useReducerContext';
import { counterReducer } from '../../../reducers/counterReducer';
import { CounterPageProps } from '../../../types/counterPageProps';
import { Container } from '../container';
import { AddButton } from './addButton';
import { Counter } from './counter';
import { SubtractButton } from './subtractButton';

const CountContextProvider = ({ children }: CounterPageProps) => {
  const [counter, dispatch] = useReducer(counterReducer, 0);
  return (
    <UseReducerContext.Provider value={{ counter, dispatch }}>
      {children}
    </UseReducerContext.Provider>
  );
};
export const CounterUseReducer = () => {
  return (
    <CountContextProvider>
      <Container>
        <AddButton />
        <Counter></Counter>
        <SubtractButton />
      </Container>
    </CountContextProvider>
  );
};
