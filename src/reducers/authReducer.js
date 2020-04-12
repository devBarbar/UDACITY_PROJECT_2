import { createSlice } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    success: false,
    isAuth: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      console.log(action);
      state.isAuth = true;
      state.user = action.payload;
    },
    startLogin: (state) => {
      state.isLoading = true;
    },
    successLogin: (state) => {
      state.isLoading = false;
    },
    errorLogin: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    logout: (state, action) => {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export const {
  login,
  logout,
  startLogin,
  successLogin,
  errorLogin,
} = authSlice.actions;

export const doLogin = (user) => (dispatch) => {
  dispatch(startLogin);
  try {
    dispatch(login(user));
    dispatch(successLogin());
  } catch {
    dispatch(errorLogin());
  }
};
export const isLoggedInSelector = (state) => state.auth.isAuth;

export const successLoggedInSelector = (state) => state.auth.success;

export const loggedInUserSelector = (state) => state.auth.user;

export default authSlice.reducer;
