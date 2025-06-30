const BASE_URL = 'https://gw-retail.duckdns.org/api';

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk('product/all', async () => {
  const response = await axios.get(`${BASE_URL}/product/all`);
  return response.data;
});
