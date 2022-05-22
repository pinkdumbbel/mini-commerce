import { ProductFilteredItemLi } from '../../pages/products/style';
import { FilterTypeList, FilterTypeUnion } from '../../types/common';

interface ProductFilteredItemProps {
  brandName: string;
  FilterType: FilterTypeUnion;
  setBrand: (brand: string) => void;
  setColor: (color: string) => void;
  setPage: (page: number) => void;
  categoryId?: number | null;
  setCategoryId: (categoryId: number) => void;
  depth?: boolean;
}
const ProductFilteredItem: React.FC<ProductFilteredItemProps> = ({
  brandName,
  setBrand,
  setColor,
  setPage,
  FilterType,
  depth,
  categoryId,
  setCategoryId,
}) => {
  const onClickFilter = () => {
    setPage(1);
    if (FilterType === FilterTypeList.BRAND) setBrand(brandName);
    if (FilterType === FilterTypeList.COLOR) setColor(brandName);
    if (FilterType === FilterTypeList.CATEGORY && categoryId)
      setCategoryId(categoryId);
  };

  return (
    <ProductFilteredItemLi onClick={onClickFilter} depth={depth as boolean}>
      {brandName ? brandName : 'All'}
    </ProductFilteredItemLi>
  );
};

ProductFilteredItem.defaultProps = {
  depth: false,
};

export default ProductFilteredItem;
