import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['contact', 'user'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => 'contacts',
      providesTags: ['contact'],
    }),
    addContact: build.mutation({
      query: body => ({
        url: 'contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['contact'],
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contact'],
    }),
    getUser: build.query({
      query: () => 'users/current',
      providesTags: ['user'],
    }),
    createUser: build.mutation({
      query: body => ({
        url: 'users/signup',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user'],
    }),
    loginUser: build.mutation({
      query: body => ({
        url: 'users/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user'],
    }),
    logoutUser: build.mutation({
      query: () => ({
        url: 'users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useCreateUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetUserQuery,
} = contactsApi;
