import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUserLoading: (state, action) => {
      state.isLoading = true;
      state.user = state.user;
    },
    loginUserFound: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    userLoggedOut: (state) => {
      localStorage.clear();
      state.isLoading = false;
      state.user = undefined;
    },
  },
});

export const { getUserLoading, loginUserFound, userLoggedOut } =
  authSlice.actions;
export default authSlice.reducer;
