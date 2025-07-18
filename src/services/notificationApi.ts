import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface SubscribeRequest {
  email: string;
}

export interface UnsubscribeRequest {
  token: string;
}

export interface SubscriptionResponse {
  message: string;
}

export const notificationApi = createApi({
  reducerPath: 'notificationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gw-retail.duckdns.org/api/' }),
  endpoints: (builder) => ({
    subscribe: builder.mutation<SubscriptionResponse, SubscribeRequest>({
      query: ({ email }) => ({
        url: 'notification/sub',
        method: 'POST',
        body: { email },
      }),
    }),
    unsubscribe: builder.mutation<SubscriptionResponse, UnsubscribeRequest>({
      query: ({ token }) => ({
        url: 'notification/unsub',
        method: 'POST',
        body: { token },
      }),
    }),
  }),
});

export const { useSubscribeMutation, useUnsubscribeMutation } = notificationApi;
