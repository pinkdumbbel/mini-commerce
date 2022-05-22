import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import fetcher, { QueryKeys } from '../../api/fetcher';
import { ProductFilteredListUl } from '../../pages/products/style';
import { BrandsAndColor, Categories } from '../../types/api';
import {
  EndpointList,
  FilterTypeList,
  FilterTypeUnion,
} from '../../types/common';
import categoryTree from '../../util/categoryTree';
import ProductFilteredItem from './ProductFilteredItem';

interface ProductFilteredListProps {
  setBrand: (brand: string) => void;
  setColor: (color: string) => void;
  setPage: (page: number) => void;
  setCategoryId: (categoryId: number) => void;
  FilterType: FilterTypeUnion;
}
const ProductFilteredList: React.FC<ProductFilteredListProps> = ({
  setBrand,
  setColor,
  setPage,
  FilterType,
  setCategoryId,
}) => {
  const [itemList, setItemList] = useState<{ name: string }[]>([]);
  const [categories, setCategories] = useState<Categories>([]);
  const { data: brandList } = useQuery(QueryKeys.BRANDS, () =>
    fetcher<BrandsAndColor>(EndpointList.BRANDS)
  );

  const { data: colorList } = useQuery(QueryKeys.COLOR, () =>
    fetcher<BrandsAndColor>(EndpointList.COLOR)
  );

  const { data: categoryList } = useQuery(QueryKeys.CATEGORY, () =>
    fetcher<Categories>(EndpointList.CATEGORY)
  );

  useEffect(() => {
    if (brandList && FilterType === FilterTypeList.BRAND) {
      setItemList(brandList);
    }

    if (colorList && FilterType === FilterTypeList.COLOR) {
      setItemList(colorList);
    }

    if (categoryList && FilterType === FilterTypeList.CATEGORY) {
      setCategories(categoryTree(categoryList));
    }
  }, [FilterType, brandList, colorList, categoryList]);

  if (
    (FilterType === FilterTypeList.BRAND ||
      FilterType === FilterTypeList.COLOR) &&
    itemList.length <= 0
  )
    return null;

  if (FilterType === FilterTypeList.CATEGORY && categories.length <= 0)
    return null;

  return (
    <ProductFilteredListUl>
      <ProductFilteredItem
        brandName=''
        setBrand={setBrand}
        setColor={setColor}
        setCategoryId={setCategoryId}
        setPage={setPage}
        categoryId={null}
        FilterType={FilterType}
      />
      {FilterType === FilterTypeList.CATEGORY
        ? categories.map((category) => {
            return (
              <ProductFilteredItem
                key={category.id}
                brandName={category.name}
                setBrand={setBrand}
                setColor={setColor}
                setPage={setPage}
                setCategoryId={setCategoryId}
                categoryId={category.id}
                FilterType={FilterType}
                depth={category.parent_id ? true : false}
              />
            );
          })
        : itemList.map((item) => (
            <ProductFilteredItem
              key={item.name}
              brandName={item.name}
              setBrand={setBrand}
              setColor={setColor}
              setPage={setPage}
              setCategoryId={setCategoryId}
              FilterType={FilterType}
            />
          ))}
    </ProductFilteredListUl>
  );
};

export default ProductFilteredList;
