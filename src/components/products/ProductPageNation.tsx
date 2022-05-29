import { ProductPageNationWrapDiv } from '../../pages/products/style';
import ProductPageList from './ProductPageList';

interface ProductPageNationProps {
  totalPage: number;
  /*   setPage: (page: number) => void;
  currentPage: number; */
}

const ProductPageNation: React.FC<ProductPageNationProps> = ({
  totalPage,
  /*   setPage,
  currentPage, */
}) => {
  return (
    <ProductPageNationWrapDiv>
      <ProductPageList
        totalPage={totalPage}
        /*         setPage={setPage}
        currentPage={currentPage} */
      />
    </ProductPageNationWrapDiv>
  );
};

export default ProductPageNation;
