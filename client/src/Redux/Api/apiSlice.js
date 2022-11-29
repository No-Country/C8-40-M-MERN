import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  // baseUrl: `http://localhost:3000/api`,
  baseUrl: 'https://c8-40-m-mern-kappa.vercel.app/api',
  prepareHeaders: (headers, { getState }) => {
    // const state = getState();
    // console.log('state', state);
    const token = sessionStorage.getItem('token');
    if (token) headers.set('authorization', `Bearer ${token}`);
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
    updateUser: builder.mutation({
      query: ({ id, ...userData }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: userData,
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: '/users',
      }),
    }),
    getUserbyId: builder.query({
      query: (id) => ({
        url: `/users?_id=${id}`,
      }),
    }),
    // products endpoints
    getAllPosts: builder.query({
      query: () => ({
        url: '/posts',
      }),
    }),
    getPostsById: builder.query({
      query: (id) => ({
        url: `/posts/` + id,
      }),
    }),
    addNewPost: builder.mutation({
      query: (postData) => ({
        url: '/posts',
        method: 'POST',
        body: postData,
      }),
    }),

    // ??
    // getUserPosts: builder.query({
    //   query: () => ({
    //     url: `/pend`,
    //   }),
    // }),
    // ??

    updatePost: builder.mutation({
      query: ({ id, ...postData }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body: postData,
      }),
    }),

    // ??
    // deletePosts: builder.mutation({
    //   query: (xxxx) => ({
    //     url: `/posts`,
    //     method: 'DELETE',
    //   }),
    // }),
    // ??
  }),
});

export const {
  useGetCategoriesQuery,

  useLoginUserMutation,
  useCreateUserMutation,
  useUpdateUserMutation,
  useGetAllUsersQuery,
  useGetUserbyIdQuery, // only admins

  useGetAllPostsQuery,
  useGetPostsByIdQuery,
  useAddNewPostMutation,
  // useGetUserPostsQuery,
  useUpdatePostMutation,
  // useDeletePostsMutation,
} = apiSlice;
