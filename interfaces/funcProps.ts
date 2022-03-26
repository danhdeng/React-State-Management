import { Dispatch, SetStateAction } from 'react';

export interface FuncProps {
  setCounter: Dispatch<SetStateAction<number>>;
}
