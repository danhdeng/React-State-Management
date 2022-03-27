import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

export const useUser = () => useContext(StoreContext).user;
