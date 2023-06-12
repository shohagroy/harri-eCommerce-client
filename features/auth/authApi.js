import { apiSlice } from "../api/apiSlice";
import { getUserLoading, userNotLogin, loginUserFound } from "./authSlice";

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
      invalidatesTags: ["users"],
      providesTags: ["users"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        console.log("call lkasdhlij fpoajpofjsapofdjosai");
        dispatch(getUserLoading());
        try {
          const result = await queryFulfilled;
          if (result?.data?.data?._id) {
            return dispatch(loginUserFound(result?.data?.data));
          }
        } catch (err) {
          // dispatch(userNotLogin());
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
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          if (result.data?.user?._id) {
            dispatch(loginUserFound(result.data.user));
          }
        } catch (err) {}
      },
    }),

    googleLogin: builder.query({
      query: () => ({
        url: `/login/auth/google`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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
      invalidatesTags: ["users"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result.data?.user?._id) {
            dispatch(loginUserFound(result.data.user));
          }
        } catch (err) {}
      },
    }),
  }),
  tagTypes: ["users"],
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetLoginUserQuery,
  useGoogleLoginQuery,
  useLoginWithGoogleQuery,
} = authApi;
