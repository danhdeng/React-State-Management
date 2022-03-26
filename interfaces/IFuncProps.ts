import { Dispatch, SetStateAction } from 'react';

export interface IFuncProps {
  setCounter: Dispatch<SetStateAction<number>>;
}
