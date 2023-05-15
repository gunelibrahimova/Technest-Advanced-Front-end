import { BASE_URL } from './../consts/config';
  import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => 'products',
    }),
    getProductById: builder.query<any, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);


export const { useGetProductByIdQuery, useGetProductsQuery } = api;

