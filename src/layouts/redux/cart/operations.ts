import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

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
export const applyPromoCodeThunk = createAsyncThunk<
  string, // успішний результат — застосований промокод
  string, // аргумент — промокод
  { rejectValue: string } // тип для помилки
>('cart/applyPromoCode', async (promoCode, { rejectWithValue }) => {
  try {
    const response = await axios.post('/api/cart/apply-promo', { promoCode });

    if (response.data && response.data.appliedCode) {
      return response.data.appliedCode;
    }

    return rejectWithValue('Невдала відповідь від сервера');
  } catch (error: any) {
    if (error.response?.data?.message) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue('Помилка під час застосування промокоду');
  }
});
