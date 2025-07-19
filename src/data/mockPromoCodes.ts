export interface PromoCode {
  code: string;
  discountType: 'percent' | 'fixed';
  value: number; // відсоток або фіксована сума
  minOrderTotal?: number;
  expiresAt?: string; // у форматі 'YYYY-MM-DD'
  isUsed: boolean;
  isActive: boolean;
}

export const mockPromoCodes: PromoCode[] = [
  {
    code: 'SALE10',
    discountType: 'percent',
    value: 10, // 10% знижка
    isUsed: false,
    isActive: true,
    expiresAt: '2025-12-31',
  },
  {
    code: 'SAVE50',
    discountType: 'fixed',
    value: 50, // 50 грн знижка
    minOrderTotal: 300,
    isUsed: false,
    isActive: true,
  },
  {
    code: 'EXPIRED20',
    discountType: 'percent',
    value: 20,
    isUsed: false,
    isActive: true,
    expiresAt: '2023-12-31',
  },
  {
    code: 'USED123',
    discountType: 'fixed',
    value: 100,
    isUsed: true,
    isActive: true,
  },
  {
    code: 'DISABLED15',
    discountType: 'percent',
    value: 15,
    isUsed: false,
    isActive: false,
  },
];
