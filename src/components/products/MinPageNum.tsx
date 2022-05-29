import { ProductPageNumberLi } from '../../pages/products/style';
import ProductPageNumber from './ProductPageNumber';

interface MinPageNumProps {
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

const MinPageNum: React.FC<MinPageNumProps> = ({
  setCurrentPage,
  currentPage,
}) => {
  const minPageNum = 1;
  return (
    <>
      <ProductPageNumber
        pageNum={minPageNum}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <ProductPageNumberLi>...</ProductPageNumberLi>
    </>
  );
};

export default MinPageNum;
