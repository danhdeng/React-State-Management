import { createContext } from 'react';
import { ICounterContext } from '../interfaces/ICounterContext';

export const CounterContext = createContext<ICounterContext | null>(null);
