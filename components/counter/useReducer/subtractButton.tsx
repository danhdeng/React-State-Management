import React, { useContext } from 'react';
import { UseReducerContext } from '../../../context/useReducerContext';

export const SubtractButton = () => {
  const counterContext = useContext(UseReducerContext);
  console.log(counterContext);
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
