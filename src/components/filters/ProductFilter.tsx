import { ProductFilterWrapDiv } from '../../pages/products/style';
import { FilterTypeList } from '../../types/common';
import ProductFilterSelectBox from './ProductFilterSelectBox';

interface ProductFilterProps {
  setBrand: (brand: string) => void;
  setPage: (page: number) => void;
  setColor: (color: string) => void;
  setCategoryId: (categoryId: number) => void;
}
const ProductFilter: React.FC<ProductFilterProps> = ({
  setPage,
  setBrand,
  setColor,
  setCategoryId,
}) => {
  return (
    <ProductFilterWrapDiv>
      <ProductFilterSelectBox
        setBrand={setBrand}
        setColor={setColor}
        setPage={setPage}
        setCategoryId={setCategoryId}
        FilterType={FilterTypeList.BRAND}
      />
      <ProductFilterSelectBox
        setBrand={setBrand}
        setColor={setColor}
        setPage={setPage}
        setCategoryId={setCategoryId}
        FilterType={FilterTypeList.COLOR}
      />
      <ProductFilterSelectBox
        setBrand={setBrand}
        setColor={setColor}
        setPage={setPage}
        setCategoryId={setCategoryId}
        FilterType={FilterTypeList.CATEGORY}
      />
    </ProductFilterWrapDiv>
  );
};

export default ProductFilter;
