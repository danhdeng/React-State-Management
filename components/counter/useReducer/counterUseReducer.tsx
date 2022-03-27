import React, { useReducer } from 'react';
import { Container } from '../container';
import { AddButton } from './addButton';
import { Counter } from './counter';
import { SubtractButton } from './subtractButton';
import { ReducerContextProvider } from './useReducerContextProvider';

export const CounterUseReducer = () => {
  return (
    <ReducerContextProvider>
      <Container>
        <AddButton />
        <Counter></Counter>
        <SubtractButton />
      </Container>
    </ReducerContextProvider>
  );
};
