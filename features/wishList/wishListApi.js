import { apiSlice } from "../api/apiSlice";

export const wishListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToWishList: builder.mutation({
      query: (data) => ({
        url: `/wish-lists`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        console.log("api cal");
        try {
          const result = await queryFulfilled;

          console.log(result);
          if (result.data.status === "success") {
            const { productId } = arg;
            // dispatch(
            //   apiSlice.util.updateQueryData(
            //     "get-login-user",
            //     undefined,
            //     (draft) => {
            //       console.log(JSON.stringify(draft));
            //     }
            //   )
            // );
          }
        } catch (err) {}
      },
    }),
  }),
});

export const { useAddToWishListMutation } = wishListApi;
