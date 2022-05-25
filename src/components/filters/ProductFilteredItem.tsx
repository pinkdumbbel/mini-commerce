import { MouseEventHandler } from 'react';
import useQueryString from '../../hooks/useQueryString';
import {
  ProductFilteredItemLi,
  ProductFilteredItemSpan,
} from '../../pages/products/style';
import { FilterTypeList, FilterTypeUnion } from '../../types/common';

interface ProductFilteredItemProps {
  itemName: string;
  filterType: FilterTypeUnion;
  categoryId?: number;
  depth?: boolean;
}
const ProductFilteredItem: React.FC<ProductFilteredItemProps> = ({
  itemName,
  filterType,
  depth,
  categoryId,
}) => {
  const onClickItem = useQueryString(
    filterType.toLowerCase(),
    filterType === FilterTypeList.CATEGORY && categoryId
      ? categoryId.toString()
      : itemName
  );

  return (
    <ProductFilteredItemLi
      depth={depth as boolean}
      onClick={onClickItem as MouseEventHandler<HTMLSpanElement>}
    >
      <ProductFilteredItemSpan>{itemName}</ProductFilteredItemSpan>
    </ProductFilteredItemLi>
  );
};

ProductFilteredItem.defaultProps = {
  depth: false,
};

export default ProductFilteredItem;
