import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

export const useCartCount = () => useContext(StoreContext).cartCount;
