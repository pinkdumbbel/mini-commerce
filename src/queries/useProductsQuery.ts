import { useQuery } from 'react-query';
import fetcher, { QueryKeys } from '../api/fetcher';
import { Products } from '../types/api';
import { EndpointList } from '../types/common';

interface ProductQueryPrams {
  page: number;
  brand: string;
  color: string;
  categoryId: number;
}

const useProductsQuery = (params: ProductQueryPrams) => {
  const { data: productList } = useQuery(QueryKeys.PRODUCTS, () =>
    fetcher<Products>(EndpointList.PRODUCTS, { ...params })
  );

  console.log(productList);
  return productList;
};

export default useProductsQuery;
