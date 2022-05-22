import { useState } from 'react';
import { useQuery } from 'react-query';
import fetcher, { QueryKeys } from '../../api/fetcher';
import ProductFilter from '../../components/filters/ProductFilter';
import ProductItem from '../../components/products/ProductItem';
import ProductPageNation from '../../components/products/ProductPageNation';
import { Products } from '../../types/api';
import { EndpointList } from '../../types/common';
import { ContentWrapDiv, ProductsWrapDiv } from './style';

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [categoryId, setCategoryId] = useState<number | null>(null);

  const { data: productList } = useQuery(
    [QueryKeys.PRODUCTS, page, brand, color, categoryId],
    () =>
      fetcher<Products>(EndpointList.PRODUCTS, {
        page,
        brand,
        color,
        categoryId,
      })
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
        <ProductFilter
          setPage={setPage}
          setBrand={setBrand}
          setColor={setColor}
          setCategoryId={setCategoryId}
        />
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
