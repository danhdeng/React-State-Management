import eact, { useContext } from 'react';
import { CounterContext } from './counterUseContext';

export const Counter = () => {
  const counterContext = useContext(CounterContext);
  if (counterContext === null) return <p></p>;
  return <div>Counter: {counterContext.counter}</div>;
};
