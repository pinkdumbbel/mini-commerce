import { useQuery } from 'react-query';
import fetcher, { QueryKeys } from '../../api/fetcher';
import ProductFilter from '../../components/filters/ProductFilter';
import ProductItem from '../../components/products/ProductItem';
import ProductPageNation from '../../components/products/ProductPageNation';
import useParams from '../../hooks/useParams';
import { Products } from '../../types/api';
import { EndpointList } from '../../types/common';
import { ContentWrapDiv, ProductsWrapDiv } from './style';

const ProductList = () => {
  const queryString = useParams();

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
      <ProductPageNation totalPage={Math.ceil(productList.total / 20)} />
    </>
  );
};

export default ProductList;
