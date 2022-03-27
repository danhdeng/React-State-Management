import React, { useContext } from 'react';
import { UseReducerContext } from '../../../context/useReducerContext';

export const AddButton = () => {
  const counterContext = useContext(UseReducerContext);
  console.log(counterContext);
  return (
    <div>
      <button
        type="button"
        onClick={() => counterContext.dispatch({ type: 'add' })}
      >
        Add One
      </button>
    </div>
  );
};
