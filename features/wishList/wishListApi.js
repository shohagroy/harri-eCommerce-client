import { apiSlice } from "../api/apiSlice";
import { userWishList } from "../auth/authSlice";

export const wishListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToWishList: builder.mutation({
      query: (data) => ({
        url: `/wish-lists`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          if (result.data.status === "success") {
            const { productId } = arg;
            dispatch(userWishList(productId));
          }
        } catch (err) {}
      },
    }),
  }),
});

export const { useAddToWishListMutation } = wishListApi;
