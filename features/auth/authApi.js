import { apiSlice } from "../api/apiSlice";
import {
  getUserLoading,
  loginNotLogin,
  loginUserFound,
} from "../auth/authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLoginUser: builder.query({
      query: () => ({
        url: `/get-login-user`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        dispatch(getUserLoading());
        try {
          const result = await queryFulfilled;

          if (result?.data?.data?._id) {
            return dispatch(loginUserFound(result?.data?.data));
          }

          dispatch(loginNotLogin());
        } catch (err) {
          dispatch(loginNotLogin());
        }
      },
    }),

    createUser: builder.mutation({
      query: (data) => ({
        url: `/create-user`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    googleLogin: builder.query({
      query: () => ({
        url: `/login/auth/google`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    loginUser: builder.mutation({
      query: (data) => ({
        url: `/login-user`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetLoginUserQuery,
  useGoogleLoginQuery,
  useLoginWithGoogleQuery,
} = authApi;
