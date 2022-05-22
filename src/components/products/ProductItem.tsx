import {
  ProductDescriptionDiv,
  ProductDescriptionRowSpan,
  ProductImageImg,
  ProductItemDiv,
} from '../../pages/products/style';
import { Product } from '../../types/api';

interface ProductItemProps {
  productItem: Product;
}
const ProductItem: React.FC<ProductItemProps> = ({ productItem }) => {
  return (
    <ProductItemDiv>
      <ProductImageImg src={`${productItem.image}`} />
      <ProductDescriptionDiv>
        <ProductDescriptionRowSpan>
          {productItem.brand}
        </ProductDescriptionRowSpan>
        <ProductDescriptionRowSpan>
          {productItem.name}
        </ProductDescriptionRowSpan>
        <ProductDescriptionRowSpan>
          ₩{productItem.original_price.toLocaleString(navigator.language)}
        </ProductDescriptionRowSpan>
        <ProductDescriptionRowSpan>
          ₩{productItem.sales_price.toLocaleString(navigator.language)}
        </ProductDescriptionRowSpan>
      </ProductDescriptionDiv>
    </ProductItemDiv>
  );
};

export default ProductItem;
