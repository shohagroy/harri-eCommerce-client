import { apiSlice } from "../api/apiSlice";

export const wishListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToWishList: builder.mutation({
      query: (data) => ({
        url: `/wish-lists`,
        method: "POST",
        body: data,
      }),
      //   invalidatesTags: ["wishList"],
    }),
  }),
});

export const { useAddToWishListMutation } = wishListApi;
