import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      console.log(action);
      state.isAuth = true;
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const isLoggedInSelector = (state) => state.auth.isAuth;

export default authSlice.reducer;
