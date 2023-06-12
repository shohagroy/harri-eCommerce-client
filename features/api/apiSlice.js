import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_DEVELOPMENT
      ? "http://localhost:5000/api/v1"
      : process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
    tagTypes: ["categorys", "products", "users"],

    prepareHeaders: async (headers, { getState, endpoint }) => {
      const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
        const [name, value] = cookie.split("=");
        acc[name] = value;
        return acc;
      }, {});

      const token = cookies["harriShop"];
      // console.log(token);

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({}),
});
