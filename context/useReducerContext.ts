import { createContext } from 'react';
import { IUseReducerContext } from '../interfaces/IUseReducerContext';

export const UseReducerContext = createContext<IUseReducerContext | null>(null);
