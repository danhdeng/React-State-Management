import create from 'zustand';
import { IEcommerce } from '../../interfaces/IEcommerce';

export const useStore = create<IEcommerce>((set) => ({
  user: '',
  cartCount: 0,
  login: () => set(() => ({ user: 'welcome to zustand: Dan' })),
  logout: () => set(() => ({ user: '' })),
  addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
}));
