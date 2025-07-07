import { createSlice } from '@reduxjs/toolkit';

import type { Product } from '../../types/Product';
import { fetchProduct, fetchProductBySku } from './operations';

interface ProductsState {
  items: Product[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message || 'Помилка при завантаженні продуктів';
      })
      .addCase(fetchProductBySku.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductBySku.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductBySku.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message || 'Помилка при завантаженні продукту';
      });
  },
});

export const productReducer = productsSlice.reducer;
