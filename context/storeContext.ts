import { createContext } from 'react';
import { IEcommerce } from '../interfaces/IEcommerce';

export const StoreContext = createContext<IEcommerce>({} as IEcommerce);
