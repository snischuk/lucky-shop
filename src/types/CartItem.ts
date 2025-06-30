import type { Product } from './Product';

export interface CartItem
  extends Pick<
    Product,
    'sku' | 'name' | 'price' | 'brand' | 'image' | 'category'
  > {
  quantity: number;
}
