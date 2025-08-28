import type { ProductsFilters } from '../../types/ProductsFilters';
import type { RootState } from '../store';

export const selectFilters = (state: RootState): ProductsFilters =>
  state.filters;
