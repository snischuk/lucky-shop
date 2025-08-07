import { api } from './api';

export interface SubscribeRequest {
  email: string;
}

export interface UnsubscribeRequest {
  token: string;
}

export interface SubscriptionResponse {
  message: string;
}

export const notificationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    subscribe: builder.mutation<SubscriptionResponse, SubscribeRequest>({
      query: ({ email }) => ({
        url: 'api/notification/sub',
        method: 'POST',
        body: { email },
      }),
    }),
    unsubscribe: builder.mutation<SubscriptionResponse, UnsubscribeRequest>({
      query: ({ token }) => ({
        url: 'api/notification/unsub',
        method: 'POST',
        body: { token },
      }),
    }),
  }),
});

export const { useSubscribeMutation, useUnsubscribeMutation } = notificationApi;
