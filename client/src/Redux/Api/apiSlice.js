import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  // baseUrl: `http://localhost:3000/api/`,
  baseUrl: 'https://c8-40-m-mern-kappa.vercel.app/api/',
  prepareHeaders: (headers, { getState }) => {
    // const token = getState()
    const token = sessionStorage.getItem("token")
    if (token) headers.set('authorization', `Bearer ${token}`)
    return headers
  },
})

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery,
  endpoints: (builder) => ({
    // user endpoints
    loginUser: builder.mutation({
      query: (userData) => ({
        url: `/users`,
        method: 'POST',
        body: userData,
      })
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: '/users',
        method: 'POST',
        body: userData,
      })
    }),
    updateUser: builder.mutation({
      query: ({id, ...userData}) => ({
        url: `/users/${id}`,
        method: 'PATCH',
        body: userData,
      })
    }),
    // products endpoints
    getAllPosts: builder.query({
      query: () => ({
        url: '/post',
      })
    }),
    addNewPosts: builder.mutation({
      query: (postData) => ({
        url: '/post',
        method: 'POST',
        body: postData,
      })
    }),
    getUserPosts: builder.query({
      query: () => ({
        url: `/post`,
      })
    }),
    updatePosts: builder.mutation({
      query: ({id, ...postData}) => ({
        url: `/posts`,
        method: 'PATCH',
        body: postData,
      })
    }),
    deletePosts: builder.mutation({
      query: (xxxx) => ({
        url: `/posts`,
        method: 'DELETE',
      })
    }),
  }),
})

export const {
  useLoginUserMutation,
  useCreateUserMutation,
  useUpdateUserMutation,

  useGetAllPostsQuery,
  useAddNewPostsMutation,
  useGetUserPostsQuery,
  useUpdatePostsMutation,
  useDeletePostsMutation,
} = apiSlice