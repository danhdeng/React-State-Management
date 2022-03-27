import { useStore } from './useStore';

export const useLogout = () => useStore((state) => state.logout);
