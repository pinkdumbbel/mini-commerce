import { ProductPageNumberLi } from '../../pages/products/style';
import ProductPageNumber from './ProductPageNumber';

interface MinPageNumProps {
  setPage: (page: number) => void;
}

const MinPageNum: React.FC<MinPageNumProps> = ({ setPage }) => {
  const minPageNum = 1;
  return (
    <>
      <ProductPageNumber pageNum={minPageNum} setPage={setPage} />
      <ProductPageNumberLi>...</ProductPageNumberLi>
    </>
  );
};

export default MinPageNum;
