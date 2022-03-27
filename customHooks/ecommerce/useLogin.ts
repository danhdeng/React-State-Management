import { UseSelectorContext } from './../../context/useSelectorContext';
import { useContextSelector } from 'use-context-selector';
export const useLogin = () =>
  useContextSelector(UseSelectorContext, (s) => s.login);
