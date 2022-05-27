import { MouseEventHandler, useEffect, useState } from 'react';
import useQueryString from '../../hooks/useQueryString';
import {
  ProductFilteredItemLi,
  ProductFilteredItemSpan,
} from '../../pages/products/style';
import { Categories } from '../../types/api';
import { FilterTypeList, FilterTypeUnion } from '../../types/common';

interface ProductFilteredItemProps {
  itemName: string;
  filterType: FilterTypeUnion;
  childCategory?: Categories;
  categoryId?: number;
  depth?: boolean;
}
const ProductFilteredItem: React.FC<ProductFilteredItemProps> = ({
  itemName,
  filterType,
  categoryId,
  childCategory,
  depth,
}) => {
  const [childOfParentCategories, setChildOfParentCategories] =
    useState<Categories>([]);

  const onClickItem = useQueryString(
    filterType.toLowerCase(),
    filterType === FilterTypeList.CATEGORY && categoryId
      ? categoryId.toString()
      : itemName
  );

  useEffect(() => {
    if (filterType === FilterTypeList.CATEGORY && childCategory) {
      /* console.log(childCategory); */
      setChildOfParentCategories(
        childCategory.filter((child) => child.parent_id === categoryId)
      );
    }
  }, [categoryId, filterType, childCategory]);

  if (
    filterType === FilterTypeList.CATEGORY &&
    childOfParentCategories.length === 0
  )
    return null;

  console.log(childOfParentCategories);
  return (
    <>
      <ProductFilteredItemLi
        depth={depth as boolean}
        onClick={onClickItem as MouseEventHandler<HTMLSpanElement>}
      >
        <ProductFilteredItemSpan>{itemName}</ProductFilteredItemSpan>
      </ProductFilteredItemLi>
      {filterType === FilterTypeList.CATEGORY &&
        childOfParentCategories.map((child) => {
          return (
            <ProductFilteredItem
              itemName={child.name}
              filterType={filterType}
              categoryId={child.id}
              childCategory={childOfParentCategories}
              depth={true}
            />
          );
          /* return (
            <ProductFilteredItemLi
              key={child.id}
              depth={true}
              onClick={onClickItem as MouseEventHandler<HTMLSpanElement>}
            >
              <ProductFilteredItemSpan>{child.name}</ProductFilteredItemSpan>
            </ProductFilteredItemLi>
          ); */
        })}
    </>
  );
};

ProductFilteredItem.defaultProps = {
  depth: false,
};
export default ProductFilteredItem;
