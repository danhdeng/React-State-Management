import React from 'react';
import { ICounterAction } from '../interfaces/ICounterAction';

export const counterReducer = (state: number, action: ICounterAction) => {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'subtract':
      return state - 1;
    default:
      return state;
  }
};
