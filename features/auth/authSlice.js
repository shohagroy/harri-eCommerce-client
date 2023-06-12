import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
      state.user = state.user;
    },
    loginUserFound: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    stopeLoading: (state) => {
      state.isLoading = false;
    },
    userLoggedOut: (state) => {
      document.cookie =
        "harriShop=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      state.user = null;
      state.isLoading = false;
    },
  },
});

export const { startLoading, loginUserFound, userLoggedOut, stopeLoading } =
  authSlice.actions;
export default authSlice.reducer;
