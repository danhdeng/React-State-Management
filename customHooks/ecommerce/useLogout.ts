import { UseSelectorContext } from './../../context/useSelectorContext';
import { useContextSelector } from 'use-context-selector';
export const useLogout = () =>
  useContextSelector(UseSelectorContext, (s) => s.logout);
