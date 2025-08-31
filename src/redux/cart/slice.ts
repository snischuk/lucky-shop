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
        if (typeof action.payload.price === 'number') {
          existing.price = action.payload.price;
        }
        if ('oldPrice' in action.payload) {
          existing.oldPrice = action.payload.oldPrice ?? null;
        }
        if (existing.oldPrice != null) {
          existing.hasdiscount = existing.price < existing.oldPrice;
        } else {
          existing.hasdiscount = false;
        }
      } else {
        const newItem: CartItem = {
          ...action.payload,
          oldPrice:
            'oldPrice' in action.payload
              ? (action.payload.oldPrice ?? null)
              : null,
          hasdiscount:
            ('oldPrice' in action.payload &&
              action.payload.oldPrice != null &&
              action.payload.price < (action.payload.oldPrice ?? 0)) ||
            false,
        };
        state.cart.push(newItem);
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((item) => item.sku !== action.payload);
    },

    clearCart(state) {
      state.cart = [];
      state.promoCode = null;
      state.usedPromoCodes = [];
    },
    applyPromoCode(state, action: PayloadAction<string | null>) {
      state.promoCode = action.payload
        ? action.payload.trim().toUpperCase()
        : null;
    },
    clearPromoCode(state) {
      state.promoCode = null;
    },

    updateQuantity(
      state,
      action: PayloadAction<{ sku: string; quantity: number }>,
    ) {
      const { sku, quantity } = action.payload;
      const idx = state.cart.findIndex((i) => i.sku === sku);
      if (idx === -1) return;
      if (quantity <= 0) state.cart.splice(idx, 1);
      else state.cart[idx].quantity = quantity;
    },
    upsertPrice(
      state,
      action: PayloadAction<{
        sku: string;
        price: number;
        oldPrice?: number | null;
      }>,
    ) {
      const { sku, price, oldPrice = null } = action.payload;
      const item = state.cart.find((i) => i.sku === sku);
      if (!item) return;
      item.price = price;
      item.oldPrice = oldPrice;
      item.hasdiscount = oldPrice != null && price < oldPrice;
    },
    markPromoCodeUsed(state, action: PayloadAction<string>) {
      const code = action.payload.trim().toUpperCase();
      if (!state.usedPromoCodes.includes(code)) state.usedPromoCodes.push(code);
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
          state.cart = action.payload.map((item) => ({
            ...item,
            oldPrice: item.oldPrice ?? null,
            hasdiscount:
              item.oldPrice != null && item.price < (item.oldPrice ?? 0),
          }));
          state.isLoading = false;
        },
      )
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Помилка завантаження корзини';
      });
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  applyPromoCode,
  clearPromoCode,
  updateQuantity,
  upsertPrice,
  markPromoCodeUsed,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
