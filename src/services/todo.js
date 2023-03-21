import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const DATA_TAG = { type: 'Todos', id: 'LIST' };

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://629470d963b5d108c18b87da.mockapi.io',
  }),
  tagTypes: ['AddTodo', 'UpdateTodo'],
  endpoints: (builder) => ({
    
    getAllTodos: builder.query({
      query: () => 'todos',
      providesTags: ['AddTodo', 'UpdateTodo'],
    }),

    addTodo: builder.mutation({
      query: (body) => ({
        url: 'todos',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['AddTodo'],
    }),
    
    updateTodo: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `todos/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ['UpdateTodo'],
    }),
  }),
});

export const { useGetAllTodosQuery, useAddTodoMutation, useUpdateTodoMutation } = todoApi;
