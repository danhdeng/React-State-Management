import React, { useContext } from 'react';
import { UseReducerContext } from '../../../context/useReducerContext';

export const SubtractButton = () => {
  const counterContext = useContext(UseReducerContext);
  console.log(counterContext);
  if (counterContext === null) return <p></p>;
  return (
    <div>
      <button
        type="button"
        onClick={() => counterContext.dispatch({ type: 'subtract' })}
      >
        Subtract One
      </button>
    </div>
  );
};
