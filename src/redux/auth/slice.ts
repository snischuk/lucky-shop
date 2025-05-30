import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

interface User {
  name: string | null;
  email: string | null;
}

interface AuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}
const initialState: AuthState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    })
    .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    })
    .addCase(logOut.fulfilled, (state) => {
        state.user = {name: null, email:null};
        state.token = null;
        state.isLoggedIn = false;
    })
    .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
    })
    .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
    })
  }
});

export const authReducer = authSlice.reducer;
