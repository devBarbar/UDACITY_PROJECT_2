import { createSlice } from "@reduxjs/toolkit";
import { _getUsers } from "../_DATA";
export const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    error: false,
    users: null,
  },
  reducers: {
    startLoadUser: (state) => {
      state.isLoading = true;
    },
    successLoadUser: (state) => {
      state.isLoading = false;
    },
    errorLoadUser: (state) => {
      state.error = true;
      state.isLoading = false;
    },
    loadUser: (state, action) => {
      state.users = action.payload;
    },
  },
});
export const {
  loadUser,
  startLoadUser,
  successLoadUser,
  errorLoadUser,
} = userSlice.actions;

export const loadUsers = () => async (dispatch) => {
  dispatch(startLoadUser());
  try {
    const users = await _getUsers();
    dispatch(loadUser(users));
    dispatch(successLoadUser());
  } catch {
    dispatch(errorLoadUser());
  }
};

export default userSlice.reducer;

export const LoadedUsers = (state) => state.users;

export const getUserByID = (state) => (id) => state.users.users[id];
