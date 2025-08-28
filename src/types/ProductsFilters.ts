import type { Product } from './Product';

export interface ProductsFilters {
  gender?: string;
  category?: string;
  color?: string | string[];
  season?: string | string[];
  size?: string | string[];
  price_from?: number;
  price_to?: number;
}

export type ProductsResponse = Product[];
