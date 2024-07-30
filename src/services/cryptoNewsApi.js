import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-rapidapi-host': 'crypto-news51.p.rapidapi.com',
    'x-rapidapi-key': 'f1d9348667msh75b941faa1140d0p18344cjsn02d990e43e35'
};

const baseUrl = 'https://crypto-news51.p.rapidapi.com';
const format = 'json';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ page, limit, time_frame }) => createRequest(`/api/v1/crypto/articles?page=${page}&limit=${limit}&time_frame=${time_frame}&format=${format}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
