import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  // baseUrl: `http://localhost:3000/api/`,
  baseUrl: 'https://c8-40-m-mern-kappa.vercel.app/api',
  prepareHeaders: (headers, { getState }) => {
    const token = getState();
    console.log(token);
    // const token = sessionStorage.getItem('token');
    // if (token) headers.set('authorization', `Bearer ${token}`);
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery,
  endpoints: (builder) => ({
    // category endpoint
    getCategories: builder.query({
      query: () => ({
        url: '/sidebar',
      }),
    }),
    // user endpoints
    loginUser: builder.mutation({
      query: (userData) => ({
        url: `/auth/login`,
        method: 'POST',
        body: userData,
      }),
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),

    // ! "unauthorized: id is required" error :  "SyntaxError: Unexpected token 'u', \"unauthoriz\"... is not valid JSON"
    updateUser: builder.mutation({
      query: ({ id, ...userData }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: userData,
      }),
    }),

    // products endpoints
    getAllPosts: builder.query({
      query: () => ({
        url: '/posts',
      }),
    }),
    // addNewPosts: builder.mutation({
    //   query: (postData) => ({
    //     url: '/post',
    //     method: 'POST',
    //     body: postData,
    //   }),
    // }),
    // getUserPosts: builder.query({
    //   query: () => ({
    //     url: `/post`,
    //   }),
    // }),
    // updatePosts: builder.mutation({
    //   query: ({ id, ...postData }) => ({
    //     url: `/posts`,
    //     method: 'PATCH',
    //     body: postData,
    //   }),
    // }),
    // deletePosts: builder.mutation({
    //   query: (xxxx) => ({
    //     url: `/posts`,
    //     method: 'DELETE',
    //   }),
    // }),
  }),
});

export const {
  useGetCategoriesQuery,

  useLoginUserMutation,
  useCreateUserMutation,
  useUpdateUserMutation,

  useGetAllPostsQuery,
  useAddNewPostsMutation,
  useGetUserPostsQuery,
  useUpdatePostsMutation,
  useDeletePostsMutation,
} = apiSlice;
