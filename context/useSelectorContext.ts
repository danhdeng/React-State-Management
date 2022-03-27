import { createContext } from 'use-context-selector';
import { IEcommerce } from '../interfaces/IEcommerce';

export const UseSelectorContext = createContext<IEcommerce>({} as IEcommerce);
