// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectUser = (state: any) => state.auth.user;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectIsRefreshing = (state: any) => state.auth.isRefreshing;
