import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategorys: builder.query({
      query: () => ({
        url: `/products/running-sneaker`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategorysQuery } = categoryApi;
