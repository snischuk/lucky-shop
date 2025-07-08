import type { Product } from '../../types/Product';
import type { RootState } from '../store';

export const selectProducts = (state: RootState): Product[] =>
  state.products.items;

export const selectProductBySku =
  (sku: string) =>
  (state: RootState): Product | undefined =>
    state.products.items.find((item) => item.sku === sku);
