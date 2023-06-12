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
      state.user = action.payload;
      state.isLoading = false;
    },
    loginNotLogin: (state) => {
      state.user = undefined;
      state.isLoading = false;
    },
    userLoggedOut: (state) => {
      document.cookie = "";
      state.user = undefined;
      state.isLoading = false;
    },
  },
});

export const { getUserLoading, loginUserFound, userLoggedOut, loginNotLogin } =
  authSlice.actions;
export default authSlice.reducer;
