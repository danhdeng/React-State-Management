import { useReducer, useState } from 'react';
import { UseReducerContext } from '../../../context/useReducerContext';
import { counterReducer } from '../../../reducers/counterReducer';
import { CounterPageProps } from '../../../types/counterPageProps';

export const ReducerContextProvider = ({ children }: CounterPageProps) => {
  const [counter, dispatch] = useReducer(counterReducer, 0);
  return (
    <UseReducerContext.Provider value={{ counter, dispatch }}>
      {children}
    </UseReducerContext.Provider>
  );
};
