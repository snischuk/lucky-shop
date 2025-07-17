import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const response = await axios.get('/api/cart');
  return response.data;
});

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (sku: string) => {
    const response = await axios.post('/api/cart', { sku });
    return response.data;
  },
);
