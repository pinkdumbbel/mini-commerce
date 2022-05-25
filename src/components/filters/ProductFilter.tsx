import { useQueries } from 'react-query';
import fetcher, { QueryKeys } from '../../api/fetcher';
import { ProductFilterWrapDiv } from '../../pages/products/style';
import { BrandsAndColor, Categories } from '../../types/api';
import { EndpointList, FilterTypeList } from '../../types/common';
import ProductFilterSelectBox from './ProductFilterSelectBox';

const ProductFilter: React.FC = () => {
  const [
    { data: brandList, isError: brandFetchError },
    { data: colorList, isError: colorFetchError },
    { data: categoryList, isError: categoryFetchError },
  ] = useQueries([
    {
      queryKey: QueryKeys.BRANDS,
      queryFn: () => fetcher<BrandsAndColor>(EndpointList.BRANDS),
    },
    {
      queryKey: QueryKeys.COLOR,
      queryFn: () => fetcher<BrandsAndColor>(EndpointList.COLOR),
    },
    {
      queryKey: QueryKeys.CATEGORY,
      queryFn: () => fetcher<Categories>(EndpointList.CATEGORY),
    },
  ]);

  if (brandFetchError || colorFetchError || categoryFetchError) return null;

  return (
    <ProductFilterWrapDiv>
      <ProductFilterSelectBox
        itemList={brandList as BrandsAndColor}
        filterType={FilterTypeList.BRAND}
      />
      <ProductFilterSelectBox
        itemList={colorList as BrandsAndColor}
        filterType={FilterTypeList.COLOR}
      />
      <ProductFilterSelectBox
        itemList={categoryList as Categories}
        filterType={FilterTypeList.CATEGORY}
      />
    </ProductFilterWrapDiv>
  );
};

export default ProductFilter;
