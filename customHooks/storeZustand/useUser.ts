import { useStore } from './useStore';

export const useUser = () => useStore((state) => state.user);
