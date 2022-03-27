import React, { useContext } from 'react';
import { CounterContext } from '../../../context/counterContext';

export const AddOneButton = () => {
  const counterContext = useContext(CounterContext);
  console.log(counterContext);
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
