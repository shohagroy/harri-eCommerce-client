import { apiSlice } from "../api/apiSlice";

export const checkoutApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCheckoutProducts: builder.query({
      query: (id) => ({
        url: `/checkout/${id}`,
        method: "GET",
      }),
      // providesTags: ["checkout"],
    }),

    // addToWishList: builder.mutation({
    //   query: (data) => ({
    //     url: `/wish-lists`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["wishlists"],
    //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //     try {
    //       const result = await queryFulfilled;

    //       if (result.data.status === "success") {
    //         const { productId } = arg;
    //         dispatch(userWishList(productId));
    //       }
    //     } catch (err) {}
    //   },
    // }),
  }),
});

export const { useGetCheckoutProductsQuery } = checkoutApi;
