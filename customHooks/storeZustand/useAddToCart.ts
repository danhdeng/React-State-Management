import { useStore } from './useStore';

export const useAddToCart = () => useStore((state) => state.addToCart);
