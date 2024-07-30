import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoExchangesHeaders = {
  'x-rapidapi-host': 'coinpaprika1.p.rapidapi.com',
  'x-rapidapi-key': 'f1d9348667msh75b941faa1140d0p18344cjsn02d990e43e35',
};

const baseUrl = 'https://coinpaprika1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoExchangesHeaders });

export const cryptoExchangesApi = createApi({
  reducerPath: 'cryptoExchangesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
  }),
});

export const { useGetExchangesQuery } = cryptoExchangesApi;
