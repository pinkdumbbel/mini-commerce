import { useEffect, useState } from 'react';
import {
  ProductFilterSelectBtn,
  ProductFilterSelectDiv,
  ProductFilterTitleSpan,
} from '../../pages/products/style';
import { FilterTypeList, FilterTypeUnion } from '../../types/common';
import ArrowIcon from '../svg/ArrowIcon';
import ProductFilteredList from './ProductFilteredList';

interface ProductFilterSelectBoxProps {
  setBrand: (brand: string) => void;
  setColor: (brand: string) => void;
  setPage: (page: number) => void;
  setCategoryId: (categoryId: number) => void;
  FilterType: FilterTypeUnion;
}
const ProductFilterSelectBox: React.FC<ProductFilterSelectBoxProps> = ({
  setBrand,
  setColor,
  setPage,
  FilterType,
  setCategoryId,
}) => {
  const [filterTypeTxt, setFilterTypeTxt] = useState('');

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    switch (FilterType) {
      case FilterTypeList.BRAND:
        setFilterTypeTxt(FilterTypeList.BRAND);
        break;
      case FilterTypeList.COLOR:
        setFilterTypeTxt(FilterTypeList.COLOR);
        break;
      case FilterTypeList.CATEGORY:
        setFilterTypeTxt(FilterTypeList.CATEGORY);
        break;
      default:
        setFilterTypeTxt('');
        break;
    }
  }, [FilterType]);
  return (
    <ProductFilterSelectDiv>
      <ProductFilterSelectBtn onClick={() => setToggle((prev) => !prev)}>
        <ProductFilterTitleSpan>{filterTypeTxt}</ProductFilterTitleSpan>
        <div>
          <ArrowIcon toggle={toggle} />
        </div>
      </ProductFilterSelectBtn>
      {toggle && (
        <ProductFilteredList
          setBrand={setBrand}
          setColor={setColor}
          setPage={setPage}
          setCategoryId={setCategoryId}
          FilterType={FilterType}
        />
      )}
    </ProductFilterSelectDiv>
  );
};

export default ProductFilterSelectBox;
