import { apiSlice } from "../api/apiSlice";
import { loginUserFound } from "../auth/authSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userInfoUpdate: builder.mutation({
      query: (data) => ({
        url: `/userInfo`,
        method: "PATCH",
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

export const { useUserInfoUpdateMutation } = userApi;
