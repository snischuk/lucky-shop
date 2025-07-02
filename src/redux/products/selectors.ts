import type { Product } from '../../types/Product';
import type { RootState } from '../store';

export const selectProducts = (state: RootState): Product[] =>
  state.products.items;
