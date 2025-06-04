// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectIsLoggedIn = (state: any): void => state.auth.isLoggedIn;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectUser = (state: any): void => state.auth.user;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectIsRefreshing = (state: any): void => state.auth.isRefreshing;
