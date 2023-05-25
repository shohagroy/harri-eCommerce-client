import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",

    // "Content-Type": "multipart/form-data",
    // prepareHeaders: async (headers, { getState, endpoint }) => {
    //   const token = getState()?.auth?.accessToken;
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }

    //   return headers;
    // },
    // prepareHeaders: (headers) => {
    //   headers.set("Content-Type", "application/json");
    //   return headers;
    // },
  }),

  endpoints: (builder) => ({}),
});
