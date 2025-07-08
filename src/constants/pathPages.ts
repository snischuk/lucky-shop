export const PATH_PAGES = {
  MAIN: '/',

  // UNAUTHORIZED: '/401',
  // FORBIDDEN: '/403',
  NOT_FOUND: '/404',
  SERVER_ERROR: '/500',

  GENDER_PARAM: '/:gender',
  GENDER_PRODUCTS: '/:gender/products',
  GENDER_PRODUCT_ID_PARAM: '/:gender/products/:productId',

  CART: '/cart',
  // CHECKOUT: '/checkout',
  // ACCOUNT: '/account',
  // ACCOUNT_PROFILE: '/account/profile',
  // ACCOUNT_ORDERS: '/account/orders',
  // ACCOUNT_SETTINGS: '/account/settings',
  // ADMIN: '/admin',
  // ADMIN_PRODUCTS: '/admin/products',
  // ADMIN_PRODUCTS_ID: '/admin/products/:productId',
  // ADMIN_ORDERS: '/admin/orders',
  // ADMIN_USERS: '/admin/users',
  // ADMIN_USERS_ID: '/admin/users/:userId',
  AUTH: '/auth',
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESEND_PASSWORD: '/auth/resend-password',
  CREATE_NEW_PASSWORD: '/auth/create-new-password',

  PRIVACY_POLICY: '/privacy-policy',
  TERMS_OF_SERVICE: '/terms-of-service',

  UNSUBSCRIPTION_CONFIRM: '/unsubscribe',
  UNSUBSCRIPTION_CANCEL: '/unsubscribe/cancel',
  UNSUBSCRIPTION_SUCCESS: '/unsubscribe/success',
} as const;

export type PathPages = (typeof PATH_PAGES)[keyof typeof PATH_PAGES];

export type PathParams = {
  [PATH_PAGES.GENDER_PRODUCTS]: {
    gender: string;
  };
  [PATH_PAGES.GENDER_PRODUCT_ID_PARAM]: {
    gender: string;
    productId: string;
  };
};

declare module 'react-router-dom' {
  interface Register {
    params: PathParams;
  }
}
