import axios, { AxiosResponse } from 'axios';
import { QueryClient } from 'react-query';

//QueryClient인스턴스가 한번만 생성되도록 설정
export const getClient = (() => {
  let client: QueryClient | null = null;

  return () => {
    if (!client) {
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24,
            staleTime: 1000 * 60,
          },
        },
      });
    }

    return client;
  };
})();

const BASE_URL = process.env.REACT_APP_API_URL;

const fetcher = async <T>(endpoint: string, params = {}) => {
  const response: AxiosResponse<T> = await axios.get(
    `${BASE_URL}/${endpoint}`,
    {
      params,
    }
  );

  return response.data;
};

export const QueryKeys = {
  PRODUCTS: 'PRODUCTS',
  BRANDS: 'BRANDS',
  COLOR: 'COLOR',
  CATEGORY: 'CATEGORY',
};

export default fetcher;
