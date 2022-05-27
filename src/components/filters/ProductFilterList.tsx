import { useEffect, useState } from 'react';
import { ProductFilteredListUl } from '../../pages/products/style';
import { BrandsAndColor, Categories } from '../../types/api';
import { FilterTypeList, FilterTypeUnion } from '../../types/common';
import ProductFilteredItem from './ProductFilteredItem';

interface ProductFilterListProps {
  itemList: BrandsAndColor | Categories;
  filterType: FilterTypeUnion;
}
const ProductFilterList: React.FC<ProductFilterListProps> = ({
  itemList,
  filterType,
}) => {
  const [parentCategory, setParentCategory] = useState<Categories>([]);
  const [childCategory, setChildCategory] = useState<Categories>([]);
  useEffect(() => {
    if (filterType === FilterTypeList.CATEGORY && itemList) {
      const parentCategories = (itemList as Categories)
        .filter((item) => !item.parent_id)
        .sort((a, b) => a.id - b.id);

      const childCategories = (itemList as Categories)
        .filter((item) => item.parent_id)
        .sort((a, b) => a.id - b.id);

      setParentCategory(parentCategories);
      setChildCategory([
        ...childCategories,
        /* {
          id: 18,
          parent_id: 5,
          name: 'test',
        }, */
      ]);
    }
  }, [itemList, filterType]);

  // console.log(childCategory);
  return (
    <ProductFilteredListUl>
      {/* <ProductFilteredItem itemName='' categoryId={0} filterType={filterType} /> */}
      {filterType === FilterTypeList.CATEGORY
        ? parentCategory.map((category) => {
            return (
              <ProductFilteredItem
                key={category.id}
                itemName={category.name}
                categoryId={category.id}
                filterType={filterType}
                childCategory={childCategory}
              />
            );
          })
        : (itemList as BrandsAndColor).map((item) => (
            <ProductFilteredItem
              key={item.name}
              itemName={item.name}
              filterType={filterType}
            />
          ))}
    </ProductFilteredListUl>
  );
};

export default ProductFilterList;
