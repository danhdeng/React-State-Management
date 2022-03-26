import React, { useContext } from 'react';
import { CounterContext } from './counterUseContext';

export const AddOneButton = () => {
  const counterContext = useContext(CounterContext);
  console.log(counterContext);
  if (counterContext === null) return <p></p>;
  return (
    <div>
      <button
        type="button"
        onClick={() => counterContext.setCounter((v: number) => v + 1)}
      >
        Add One
      </button>
    </div>
  );
};
