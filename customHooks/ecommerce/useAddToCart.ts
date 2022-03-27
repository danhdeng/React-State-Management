import { useContextSelector } from 'use-context-selector';
import { UseSelectorContext } from '../../context/useSelectorContext';
export const useAddToCart = () =>
  useContextSelector(UseSelectorContext, (s) => s.addToCart);
