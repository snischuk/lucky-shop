import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { CartItem } from '../../types/CartItem';
import { fetchCart, applyPromoCodeThunk } from './operations';

interface CartState {
  cart: CartItem[];
  isLoading: boolean;
  error: string | null;
  promoCode: string | null;
  usedPromoCodes: string[];
  promoValidationMsg: string | null;
}

const initialState: CartState = {
  cart: [],
  isLoading: false,
  error: null,
  promoCode: null,
  usedPromoCodes: [],
  promoValidationMsg: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existing = state.cart.find(
        (item) => item.sku === action.payload.sku,
      );
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((item) => item.sku !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
      state.promoCode = null;
      state.usedPromoCodes = [];
      state.promoValidationMsg = null;
    },
    applyPromoCode(state, action: PayloadAction<string | null>) {
      state.promoCode = action.payload; //  реалізація нового поля
    },
    setPromoValidationMsg(state, action: PayloadAction<string | null>) {
      state.promoValidationMsg = action.payload;
    },

    markPromoCodeUsed(state, action: PayloadAction<string>) {
      if (!state.usedPromoCodes.includes(action.payload)) {
        state.usedPromoCodes.push(action.payload);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchCart.fulfilled,
        (state, action: PayloadAction<CartItem[]>) => {
          state.cart = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Помилка завантаження корзини';
      })
      .addCase(applyPromoCodeThunk.pending, (state) => {
        state.promoValidationMsg = null;
      })
      .addCase(
        applyPromoCodeThunk.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.promoCode = action.payload;
          state.promoValidationMsg = null;
          if (!state.usedPromoCodes.includes(action.payload)) {
            state.usedPromoCodes.push(action.payload);
          }
        },
      )
      .addCase(applyPromoCodeThunk.rejected, (state, action) => {
        if (action.payload && typeof action.payload === 'string') {
          state.promoValidationMsg = action.payload;
        } else {
          state.promoValidationMsg = 'Помилка застосування промокоду';
        }
      });
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  applyPromoCode,
  setPromoValidationMsg,
  markPromoCodeUsed,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
