import { useState } from 'react';
import {
  ProductFilterSelectBtn,
  ProductFilterSelectDiv,
  ProductFilterTitleSpan,
} from '../../pages/products/style';
import { BrandsAndColor, Categories } from '../../types/api';
import { FilterTypeList, FilterTypeUnion } from '../../types/common';
import ArrowIcon from '../svg/ArrowIcon';
import ProductFilterList from './ProductFilterList';

interface ProductFilterSelectBoxProps {
  itemList: BrandsAndColor | Categories;
  filterType: FilterTypeUnion;
}
const ProductFilterSelectBox: React.FC<ProductFilterSelectBoxProps> = ({
  itemList,
  filterType,
}) => {
  const [showList, setShowList] = useState(false);

  return (
    <ProductFilterSelectDiv>
      <ProductFilterSelectBtn onClick={() => setShowList((prev) => !prev)}>
        <ProductFilterTitleSpan>{filterType}</ProductFilterTitleSpan>
        <div>
          <ArrowIcon toggle={showList} />
        </div>
      </ProductFilterSelectBtn>
      {showList && (
        <ProductFilterList
          filterType={filterType}
          itemList={
            filterType === FilterTypeList.CATEGORY ? [...itemList] : itemList
          }
        />
      )}
    </ProductFilterSelectDiv>
  );
};

export default ProductFilterSelectBox;
