import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ search, skip }) => ({
        url: `/products?search=${search}&skip=${skip}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),

    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),

    postNewProduct: builder.mutation({
      query: (data) => ({
        url: `/products`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["products"],
    }),

    // deleteCategoryById: builder.mutation({
    //   query: (id) => ({
    //     url: `/categorys/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["categorys"],
    //   // async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //   //   const pathResult = dispatch(
    //   //     apiSlice.util.updateQueryData("getCategorys", undefined, (draft) => {
    //   //       const data = draft.data.filter((category) => category._id != arg);
    //   //       return { ...draft, data };
    //   //     })
    //   //   );

    //   //   try {
    //   //     await queryFulfilled;
    //   //   } catch (err) {
    //   //     pathResult.undo();
    //   //   }
    //   // },
    // }),

    updateProductById: builder.mutation({
      query: (data) => ({
        url: `/products/${data._id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  usePostNewProductMutation,
  useGetProductsQuery,
  useGetSingleProductQuery,
  useUpdateProductByIdMutation,
} = productApi;
