import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com/' }),
  endpoints: (builder) => ({
    login: builder.mutation<
      { token: string; user: { name: string; email: string } },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getCurrentUser: builder.query<{ name: string; email: string }, void>({
      query: () => 'current-user',
    }),
  }),
});

export const { useLoginMutation, useGetCurrentUserQuery } = authApi;
