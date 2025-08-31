import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { ProductsFilters } from '../../types/ProductsFilters';

const filtersInitialState: ProductsFilters = {
  gender: '',
  category: '',
  color: '',
  season: '',
  size: '',
  price_from: 1,
  price_to: 30000,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setFilters(state, action: PayloadAction<Partial<ProductsFilters>>) {
      return { ...state, ...action.payload };
    },
    setFilter(
      state,
      action: PayloadAction<{
        key: keyof ProductsFilters;
        value: string | number;
      }>,
    ) {
      state[action.payload.key] = action.payload.value as never;
    },
    resetFilters() {
      return filtersInitialState;
    },
  },
});

export const { setFilters, setFilter, resetFilters } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
