import { createSelector } from '@reduxjs/toolkit';

import { mockPromoCodes } from '../../data/mockPromoCodes';
import type { CartItem, PromoCode } from '../../types/CartItem';
import type { RootState } from '../store';
export const selectCartItems = (state: RootState): CartItem[] =>
  state.cart.cart;
export const selectIsLoading = (state: RootState) => state.cart.isLoading;
export const selectPromoCode = (state: RootState) => state.cart.promoCode;
export const selectUsedPromoCodes = (state: RootState) =>
  state.cart.usedPromoCodes;

export const selectCartItemCount = createSelector([selectCartItems], (items) =>
  items.reduce((acc, it) => acc + it.quantity, 0),
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((sum, it) => sum + it.price * it.quantity, 0),
);

export const selectCartTotalOld = createSelector([selectCartItems], (items) =>
  items.reduce((sum, it) => {
    const base =
      typeof it.oldPrice === 'number' && Number.isFinite(it.oldPrice)
        ? it.oldPrice
        : it.price;
    return sum + base * it.quantity;
  }, 0),
);

export const selectDiscountFromOldPrice = createSelector(
  [selectCartTotalOld, selectCartTotal],
  (totalOld, totalCurrent) => Math.max(0, totalOld - totalCurrent),
);

// 🔧 FIX: коректно закриваємо функцію і нічого зайвого всередину
const findPromo = (code: string | null): PromoCode | null => {
  if (!code) return null;
  const normalized = code.trim().toUpperCase();
  return (
    (mockPromoCodes as PromoCode[]).find((p) => p.code === normalized) ?? null
  );
};

const isExpired = (date?: string) => {
  if (!date) return false;
  const todayStr = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
  return date < todayStr;
};

export const selectDiscountFromPromo = createSelector(
  [selectPromoCode, selectCartTotal],
  (code, total) => {
    const promo = findPromo(code);

    if (!code || !promo) {
      return { amount: 0, ok: false, message: 'Промокод не знайдено' };
    }
    if (!promo.isActive) {
      return { amount: 0, ok: false, message: 'Промокод не активний' };
    }
    if (promo.isUsed) {
      return { amount: 0, ok: false, message: 'Промокод вже використано' };
    }
    if (isExpired(promo.expiresAt)) {
      return {
        amount: 0,
        ok: false,
        message: 'Термін дії промокоду завершився',
      };
    }
    if (promo.minOrderTotal && total < promo.minOrderTotal) {
      return {
        amount: 0,
        ok: false,
        message: `Мінімальна сума замовлення: ${promo.minOrderTotal}₴`,
      };
    }

    const amount =
      promo.discountType === 'percent'
        ? Math.round(total * (promo.value / 100) * 100) / 100
        : Math.min(promo.value, total);

    return { amount, ok: true, message: null as string | null };
  },
);

export const selectGrandTotal = createSelector(
  [selectCartTotal, selectDiscountFromPromo],
  (total, promo) => Math.max(0, total - (promo.amount || 0)),
);

export const selectSavingsVsOld = createSelector(
  [selectCartTotalOld, selectGrandTotal],
  (totalOld, grandTotal) => Math.max(0, totalOld - grandTotal),
);

export const selectCartSummary = createSelector(
  [
    selectCartTotal,
    selectCartTotalOld,
    selectDiscountFromOldPrice,
    selectDiscountFromPromo,
    selectGrandTotal,
    selectPromoCode,
    selectSavingsVsOld,
  ],
  (
    total,
    totalOld,
    discountFromOldPrice,
    promo,
    grandTotal,
    promoCode,
    savingsVsOld,
  ) => ({
    total,
    totalOld,
    discountFromOldPrice,
    discountFromPromo: promo.amount,
    grandTotal,
    promoCode,
    promoOk: promo.ok,
    promoMsg: promo.message,
    savingsVsOld,
  }),
);
