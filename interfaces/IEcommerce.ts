export interface IEcommerce {
  user: string;
  cartCount: number;
  login: () => void;
  logout: () => void;
  addToCart: () => void;
}
