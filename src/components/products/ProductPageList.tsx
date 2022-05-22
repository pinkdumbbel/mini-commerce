import { PrdouctPageListUl } from '../../pages/products/style';
import numberToArray from '../../util/numberToArray';
import pagiNationSlice from '../../util/pagiNationSlice';
import MaxPageNum from './MaxPageNum';
import MinPageNum from './MinPageNum';
import ProductPageNumber from './ProductPageNumber';

interface ProductPageListProps {
  totalPage: number;
  setPage: (page: number) => void;
  currentPage: number;
}
const ProductPageList: React.FC<ProductPageListProps> = ({
  totalPage,
  setPage,
  currentPage,
}) => {
  const maxPageNum = 7;
  const totalPageArr = pagiNationSlice(
    numberToArray(totalPage),
    currentPage,
    totalPage
  );

  return (
    <PrdouctPageListUl>
      {currentPage >= maxPageNum && <MinPageNum setPage={setPage} />}
      {totalPageArr.map((pageNum) => (
        <ProductPageNumber key={pageNum} pageNum={pageNum} setPage={setPage} />
      ))}
      {currentPage <= totalPage - maxPageNum + 1 && (
        <MaxPageNum pageNum={totalPage} setPage={setPage} />
      )}
    </PrdouctPageListUl>
  );
};

export default ProductPageList;
