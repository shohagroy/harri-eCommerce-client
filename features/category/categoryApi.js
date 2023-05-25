import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategorys: builder.query({
      query: () => ({
        url: `/categorys`,
        method: "GET",
      }),
    }),

    postNewCategory: builder.mutation({
      query: (data) => ({
        url: `/categorys`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
    }),
  }),
});

export const { useGetCategorysQuery, usePostNewCategoryMutation } = categoryApi;
