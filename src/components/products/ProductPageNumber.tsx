import { ProductPageNumberLi } from '../../pages/products/style';

interface ProductPageNumberProps {
  pageNum?: number;
  setPage: (page: number) => void;
}
const ProductPageNumber: React.FC<ProductPageNumberProps> = ({
  pageNum,
  setPage,
}) => {
  const onClickPage = () => {
    setPage(pageNum as number);
  };

  return (
    <>
      <ProductPageNumberLi onClick={onClickPage}>{pageNum}</ProductPageNumberLi>
    </>
  );
};

export default ProductPageNumber;
