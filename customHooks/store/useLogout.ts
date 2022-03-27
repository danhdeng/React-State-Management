import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

export const useLogout = () => useContext(StoreContext).logout;
