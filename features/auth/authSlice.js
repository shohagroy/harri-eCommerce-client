import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user: null,
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
      console.log(action.payload);
      state.user = action.payload;
      state.isLoading = false;
    },
    userNotLogin: (state) => {
      state.user = null;
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

export const { getUserLoading, loginUserFound, userLoggedOut, userNotLogin } =
  authSlice.actions;
export default authSlice.reducer;
