import { UseSelectorContext } from './../../context/useSelectorContext';
import { useContextSelector } from 'use-context-selector';
export const useUser = () =>
  useContextSelector(UseSelectorContext, (s) => s.user);
