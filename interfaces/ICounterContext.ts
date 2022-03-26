import { Dispatch, SetStateAction } from 'react';

export interface ICounterContext {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}
