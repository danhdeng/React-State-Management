import { useStore } from './useStore';

export const useLogin = () => useStore((state) => state.login);
