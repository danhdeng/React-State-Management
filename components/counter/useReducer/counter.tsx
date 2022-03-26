import React, { useContext } from 'react';
import { UseReducerContext } from '../../../context/useReducerContext';

export const Counter = () => {
  const userReducerContext = useContext(UseReducerContext);
  if (userReducerContext === null) return <p></p>;
  return <div>Counter: {userReducerContext.counter}</div>;
};
