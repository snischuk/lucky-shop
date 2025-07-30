import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../store.ts';

export const selectCartItems = (state: RootState) => state.cart.cart;
export const selectIsLoading = (state: RootState) => state.cart.isLoading;
// export const selectCartError = (state: RootState) => state.cart.error;
export const selectPromoCode = (state: RootState) => state.cart.promoCode;
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
);
// export const selectDiscountFromPromo = (state: RootState) =>
//   state.cart.discount;
// export const selectGrandTotal = (state: RootState) => state.cart.grandTotal;
