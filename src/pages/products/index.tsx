import { useState } from 'react';
import { useQuery } from 'react-query';
import fetcher, { QueryKeys } from '../../api/fetcher';
import ProductFilter from '../../components/filters/ProductFilter';
import ProductItem from '../../components/products/ProductItem';
import ProductPageNation from '../../components/products/ProductPageNation';
import useQueryString from '../../hooks/useQueryString';
import { Products } from '../../types/api';
import { EndpointList } from '../../types/common';
import { ContentWrapDiv, ProductsWrapDiv } from './style';

const ProductList = () => {
  const [page, setPage] = useState(1);
  const queryString = useQueryString();

  console.log(queryString);

  const { data: productList } = useQuery(
    [QueryKeys.PRODUCTS, queryString],
    () => fetcher<Products>(EndpointList.PRODUCTS, queryString)
  );

  if (!productList) return null;

  return (
    <>
      <ContentWrapDiv>
        <ProductsWrapDiv>
          {productList.products.map((item) => (
            <ProductItem key={item.id} productItem={item} />
          ))}
        </ProductsWrapDiv>
        <ProductFilter />
      </ContentWrapDiv>
      <ProductPageNation
        totalPage={Math.ceil(productList.total / 20)}
        setPage={setPage}
        currentPage={page}
      />
    </>
  );
};

export default ProductList;
