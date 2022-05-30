import { ProductPageNationWrapDiv } from '../../pages/products/style';
import ProductPageList from './ProductPageList';

interface ProductPageNationProps {
  totalPage: number;
}

const ProductPageNation: React.FC<ProductPageNationProps> = ({ totalPage }) => {
  return (
    <ProductPageNationWrapDiv>
      <ProductPageList totalPage={totalPage} />
    </ProductPageNationWrapDiv>
  );
};

export default ProductPageNation;
