import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authApi } from '../services/authApi';
import { notificationApi } from '../services/notificationApi';
import { authReducer } from './authSlice';
import { cartReducer } from './cart/slice';
import { productReducer } from './products/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'role'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    [authApi.reducerPath]: authApi.reducer,
    [notificationApi.reducerPath]: notificationApi.reducer,
    cart: cartReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, notificationApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
