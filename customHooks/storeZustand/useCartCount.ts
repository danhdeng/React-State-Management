import { useStore } from './useStore';

export const useCartCount = () => useStore((state) => state.cartCount);
