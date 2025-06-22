import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface SubscribeRequest {
  email: string;
}

export interface SubscribeResponse {
  message: string;
}

export const notificationApi = createApi({
  reducerPath: 'notificationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gw-retail.duckdns.org/api/' }),
  endpoints: (builder) => ({
    subscribe: builder.mutation<SubscribeResponse, SubscribeRequest>({
      query: ({ email }) => ({
        url: 'notification/sub',
        method: 'POST',
        body: { email },
      }),
    }),
    unsubscribe: builder.mutation<SubscribeResponse, SubscribeRequest>({
      query: ({ email }) => ({
        url: 'notification/unsub',
        method: 'POST',
        body: { email },
      }),
    }),
  }),
});

export const { useSubscribeMutation, useUnsubscribeMutation } = notificationApi;
