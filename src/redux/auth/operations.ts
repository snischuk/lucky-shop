import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface User {
  name: string;
  email: string;
}

//заглушка
axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/users/signup', credentials);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', credentials);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk<
  User,
  void,
  { state: { auth: { token: string | null } }; rejectValue: string }
>('auth/refresh', async (_, thunkAPI) => {
  try {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuthHeader(savedToken);
    const response = await axios.get('/users/current');
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
