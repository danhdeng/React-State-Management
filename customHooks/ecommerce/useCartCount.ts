import { useContextSelector } from 'use-context-selector';
import { UseSelectorContext } from '../../context/useSelectorContext';
export const useCartCount = () =>
  useContextSelector(UseSelectorContext, (s) => s.cartCount);
