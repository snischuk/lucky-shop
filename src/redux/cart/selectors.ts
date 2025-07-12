import type { RootState } from '../store.ts';

export const selectCartItems = (state: RootState) => state.cart.cart;
export const selectIsLoading = (state: RootState) => state.cart.isLoading;
// export const selectCartError = (state: RootState) => state.cart.error;
export const selectPromoCode = (state: RootState) => state.cart.promoCode;
export const selectUsedPromoCodes = (state: RootState) =>
  state.cart.usedPromoCodes;
// export const selectPromoValidationMsg = (state: RootState) =>
//   state.cart.promoValidationMsg;
