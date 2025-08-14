import { createSlice } from '@reduxjs/toolkit';

import type { Product } from '../../types/Product';
import {
  fetchProduct,
  fetchProductByCategory,
  fetchProductBySku,
} from './operations';

interface ProductsState {
  items: Product[];
  isLoading: boolean;
  error: string | null;
  productBySku: Product | null;
  productByCategory: Product | null;
}

const initialState: ProductsState = {
  items: [],
  productBySku: null,
  productByCategory: null,
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
        state.productBySku = action.payload;
      })
      .addCase(fetchProductBySku.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message || 'Помилка при завантаженні продукту';
      })

      .addCase(fetchProductByCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productByCategory = action.payload;
      })
      .addCase(fetchProductByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message || 'Помилка при завантаженні продукту';
      });
  },
});

export const productReducer = productsSlice.reducer;
