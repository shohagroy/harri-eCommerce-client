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
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          if (result.data.data._id) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getCategorys",
                undefined,
                (draft) => {
                  draft.data.push(result.data.data);
                }
              )
            );
          }
        } catch (err) {
          console.log(err);
        }
      },
    }),

    deleteCategoryById: builder.mutation({
      query: (id) => ({
        url: `/categorys/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const pathResult = dispatch(
          apiSlice.util.updateQueryData("getCategorys", undefined, (draft) => {
            const data = draft.data.filter((category) => category._id != arg);
            return { ...draft, data };
          })
        );

        try {
          await queryFulfilled;
        } catch (err) {
          pathResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetCategorysQuery,
  usePostNewCategoryMutation,
  useDeleteCategoryByIdMutation,
} = categoryApi;
