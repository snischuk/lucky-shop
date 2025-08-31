import type { Product } from './Product';

export interface CartItem
  extends Pick<
    Product,
    'sku' | 'name' | 'price' | 'brand' | 'image' | 'category'
  > {
  quantity: number;
  oldPrice?: number | null;
  hasdiscount?: boolean;
}
export type DiscountType = 'percent' | 'fixed';
export interface PromoCode {
  code: string;
  discountType: DiscountType;
  value: number;
  minOrderTotal?: number;
  expiresAt?: string;
  isUsed: boolean;
  isActive: boolean;
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
