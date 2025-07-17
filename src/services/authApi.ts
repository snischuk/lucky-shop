import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  role: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  isSubscribeToAds: boolean;
  lastName?: string | null;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gw-retail.duckdns.org/' }),
  endpoints: (builder) => ({
    signIn: builder.mutation<AuthResponse, LoginRequest>({
      query: ({ email, password }) => ({
        url: 'auth/login',
        method: 'POST',
        body: { email, password },
      }),
    }),
    signUp: builder.mutation<AuthResponse, RegisterRequest>({
      query: ({ firstName, lastName, email, password, isSubscribeToAds }) => ({
        url: 'auth/register',
        method: 'POST',
        body: { firstName, lastName, email, password, isSubscribeToAds },
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
