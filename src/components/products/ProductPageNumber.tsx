import useQueryString from '../../hooks/useQueryString';
import { ProductPageNumberLi } from '../../pages/products/style';

interface ProductPageNumberProps {
  pageNum: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}
const ProductPageNumber: React.FC<ProductPageNumberProps> = ({
  pageNum,
  setCurrentPage,
  currentPage,
}) => {
  const onClickPage = useQueryString({ currentPage: pageNum, setCurrentPage });

  return (
    <>
      <ProductPageNumberLi
        onClick={onClickPage}
        activePage={currentPage === pageNum}
      >
        {pageNum}
      </ProductPageNumberLi>
    </>
  );
};

export default ProductPageNumber;
