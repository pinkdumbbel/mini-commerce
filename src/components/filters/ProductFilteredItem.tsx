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
  parentCategories?: Categories;
  depthCnt?: number;
  parentId?: number;
}
const ProductFilteredItem: React.FC<ProductFilteredItemProps> = ({
  itemName,
  filterType,
  categoryId,
  parentCategories,
  depthCnt,
  parentId,
}) => {
  const [childOfParentCategories, setChildOfParentCategories] =
    useState<Categories>([]);

  const onClickItem = useQueryString({
    filterType: filterType.toLowerCase(),
    itemName: categoryId ? categoryId.toString() : itemName,
  });

  useEffect(() => {
    if (filterType === FilterTypeList.CATEGORY && parentCategories) {
      const newCateogries = parentCategories.filter((parent) => {
        return parent.parent_id === parentId;
      });
      newCateogries.length > 0 && setChildOfParentCategories(newCateogries);
    }
  }, [parentCategories, parentId, filterType]);

  return (
    <>
      <ProductFilteredItemLi
        depthCnt={depthCnt as number}
        onClick={onClickItem as MouseEventHandler<HTMLSpanElement>}
      >
        <ProductFilteredItemSpan>{itemName}</ProductFilteredItemSpan>
      </ProductFilteredItemLi>
      {filterType === FilterTypeList.CATEGORY &&
        childOfParentCategories.map((child) => {
          return (
            <ProductFilteredItem
              key={child.id}
              itemName={child.name}
              filterType={filterType}
              categoryId={child.id}
              parentCategories={parentCategories}
              parentId={child.id}
              depthCnt={(depthCnt as number) + 1}
            />
          );
        })}
    </>
  );
};

export default ProductFilteredItem;
