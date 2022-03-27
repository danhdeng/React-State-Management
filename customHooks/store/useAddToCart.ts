import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

export const useAddToCart = () => useContext(StoreContext).addToCart;
