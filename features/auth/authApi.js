import { apiSlice } from "../api/apiSlice";

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

    googleLogin: builder.query({
      query: () => ({
        url: `/login/auth/google`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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
