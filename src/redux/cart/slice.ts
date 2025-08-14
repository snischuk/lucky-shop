import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { CartItem } from '../../types/CartItem';
import { fetchCart } from './operations';

interface CartState {
  cart: CartItem[];
  isLoading: boolean;
  error: string | null;
  promoCode: string | null;
  usedPromoCodes: string[];
}

const initialState: CartState = {
  cart: [],
  isLoading: false,
  error: null,
  promoCode: null,
  usedPromoCodes: [],
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
    },
    applyPromoCode(state, action: PayloadAction<string | null>) {
      state.promoCode = action.payload;
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
      });
  },
});

export const { addToCart, removeFromCart, clearCart, applyPromoCode } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
