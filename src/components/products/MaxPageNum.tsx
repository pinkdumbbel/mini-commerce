import { ProductPageNumberLi } from '../../pages/products/style';
import ProductPageNumber from './ProductPageNumber';

interface MaxPageNumProps {
  pageNum: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

const MaxPageNum: React.FC<MaxPageNumProps> = ({
  pageNum,
  setCurrentPage,
  currentPage,
}) => {
  return (
    <>
      <ProductPageNumberLi notPointer={true}>...</ProductPageNumberLi>
      <ProductPageNumber
        pageNum={pageNum}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default MaxPageNum;
