// mockPromoCodes.ts
export interface PromoCode {
  code: string;
  discountType: 'percent' | 'fixed';
  value: number;
  minOrderTotal?: number;
  expiresAt?: string;
  isUsed: boolean;
  isActive: boolean;
}

export const mockPromoCodes: PromoCode[] = [
  {
    code: 'WELCOME10',
    discountType: 'percent',
    value: 10,
    minOrderTotal: 1000,
    expiresAt: '2025-12-31',
    isUsed: false,
    isActive: true,
  },
  {
    code: 'SAVE100',
    discountType: 'fixed',
    value: 100,
    isUsed: false,
    isActive: true,
  },
];
