import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
<<<<<<< HEAD
    baseUrl: "https://backend-1-p0r1.onrender.com/users",
=======
    baseUrl: "https://backend-xfnt.onrender.com/users/",
>>>>>>> 6696d032da6e84fece86b2753cbbd5c5740b6dea
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
        
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: data,
        
      }),
    }),
    update: builder.mutation({
      query: (data) => ({
        url: "/update",
        method: "POST",
        body: data,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/getuser",
        method: "GET",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {useLoginMutation , useLogoutMutation , useSignupMutation , useUpdateMutation , useGetUserQuery} = apiSlice;

export default apiSlice;
