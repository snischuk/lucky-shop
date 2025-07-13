import type { Product } from './Product';

export interface CartItem
  extends Pick<
    Product,
    'sku' | 'name' | 'price' | 'brand' | 'image' | 'category'
  > {
  quantity: number;
}
export interface CartItemFull extends CartItem {
  oldPrice: number | null;
  hasdiscount: boolean;
}

export interface CartSummaryItem {
  total: number;
  discount: number;
  grandTotal: number;
  promoCode?: string | null;
  discountFromOldPrice: number;
  discountFromPromo: number;
  promoValidationMsg?: string | null;
}
