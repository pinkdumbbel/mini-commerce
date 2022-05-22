import { ProductPageNumberLi } from '../../pages/products/style';
import ProductPageNumber from './ProductPageNumber';

interface MaxPageNumProps {
  pageNum: number;
  setPage: (page: number) => void;
}

const MaxPageNum: React.FC<MaxPageNumProps> = ({ pageNum, setPage }) => {
  return (
    <>
      <ProductPageNumberLi>...</ProductPageNumberLi>
      <ProductPageNumber pageNum={pageNum} setPage={setPage} />
    </>
  );
};

export default MaxPageNum;
