import { useQueries } from 'react-query';
import fetcher, { filterTypeArr, QueryKeys } from '../../api/fetcher';
import { ProductFilterWrapDiv } from '../../pages/products/style';
import { BrandsAndColor, Categories } from '../../types/api';
import { EndpointList } from '../../types/common';
import ProductFilterSelectBox from './ProductFilterSelectBox';

type ResponseList = BrandsAndColor | Categories;

const ProductFilter: React.FC = () => {
  const responseData = useQueries([
    {
      queryKey: QueryKeys.BRANDS,
      queryFn: () => fetcher<ResponseList>(EndpointList.BRANDS),
    },
    {
      queryKey: QueryKeys.COLOR,
      queryFn: () => fetcher<ResponseList>(EndpointList.COLOR),
    },
    {
      queryKey: QueryKeys.CATEGORY,
      queryFn: () => fetcher<ResponseList>(EndpointList.CATEGORY),
    },
  ]);

  if (responseData.length <= 0) return null;

  return (
    <ProductFilterWrapDiv>
      {responseData.map(({ data, isError }, i) => {
        if (isError) return null;

        return (
          <ProductFilterSelectBox
            key={filterTypeArr[i]}
            itemList={data as ResponseList}
            filterType={filterTypeArr[i]}
          />
        );
      })}
    </ProductFilterWrapDiv>
  );
};

export default ProductFilter;
