const BASE_URL = 'https://gw-retail.duckdns.org/api';

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { ProductsFilters } from '../../types/ProductsFilters';

export const fetchProduct = createAsyncThunk('product/all', async () => {
  const response = await axios.get(`${BASE_URL}/product/all`);
  return response.data;
});

export const fetchProducts = createAsyncThunk(
  'product/allFilter',
  async (params: { filters: ProductsFilters }) => {
    const { filters } = params;

    const response = await axios.get('product/all', {
      params: {
        gender: filters.gender || undefined,
        category: filters.category || undefined,
        season: filters.season || undefined,
        color: filters.color || undefined,
        size: filters.size || undefined,
        price_from: filters.price_from || undefined,
        price_to: filters.price_to || undefined,
      },
    });

    return response.data;
  },
);

export const fetchProductBySku = createAsyncThunk(
  'product/fetchBySku',
  async (sku: string) => {
    const response = await axios.get(`${BASE_URL}/product/${sku}`);
    return response.data;
  },
);

export const fetchProductByCategory = createAsyncThunk(
  'product/fetchByCategory',
  async (category: string) => {
    const response = await axios.get(
      `${BASE_URL}/product/all?category=${category}`,
    );
    return response.data;
  },
);
