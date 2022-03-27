import React, { useContext } from 'react';
import { CounterContext } from '../../../context/counterContext';

export const Counter = () => {
  const counterContext = useContext(CounterContext);
  return <div>Counter: {counterContext.counter}</div>;
};
