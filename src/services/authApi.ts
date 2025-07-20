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

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  message: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}

export interface ResetPasswordResponse {
  message: string;
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
    forgotPassword: builder.mutation<
      ForgotPasswordResponse,
      ForgotPasswordRequest
    >({
      query: ({ email }) => ({
        url: 'auth/forgot-password',
        method: 'POST',
        body: { email },
      }),
    }),
    resetPassword: builder.mutation<
      ResetPasswordResponse,
      ResetPasswordRequest
    >({
      query: ({ token, newPassword }) => ({
        url: 'auth/reset-password',
        method: 'POST',
        body: { token, newPassword },
      }),
    }),
    signInWithGoogle: builder.mutation<AuthResponse, { accessToken: string }>({
      query: ({ accessToken }) => ({
        url: 'auth/google',
        method: 'POST',
        body: { accessToken },
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useSignInWithGoogleMutation,
} = authApi;
