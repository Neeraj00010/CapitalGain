import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-rapidapi-host': 'google-news-api1.p.rapidapi.com',
    'x-rapidapi-key': 'f1d9348667msh75b941faa1140d0p18344cjsn02d990e43e35'
};

const baseUrl = 'https://google-news-api1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ q, count }) => createRequest(`/search?language=EN&q=${q}&limit=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
