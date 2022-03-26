import { Dispatch } from 'react';
import { ICounterAction } from './ICounterAction';

export interface IUseReducerContext {
  counter: number;
  dispatch: Dispatch<ICounterAction>;
}
