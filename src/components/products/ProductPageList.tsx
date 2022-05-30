import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PrdouctPageListUl } from '../../pages/products/style';
import getPageNum from '../../util/getPageNum';
import pagiNationSlice from '../../util/pagiNationSlice';
import MaxPageNum from './MaxPageNum';
import MinPageNum from './MinPageNum';
import ProductPageNumber from './ProductPageNumber';

interface ProductPageListProps {
  totalPage: number;
}
const ProductPageList: React.FC<ProductPageListProps> = ({ totalPage }) => {
  const maxPageNum = 7;
  const { search } = useLocation();

  const [currentPage, setCurrentPage] = useState(
    search ? getPageNum(search) : 1
  );
  const [totalPageSlice, setTotalPageSlice] = useState<number[]>([]);

  useEffect(() => {
    const pageSlice = pagiNationSlice(totalPage, currentPage);
    setTotalPageSlice(pageSlice);
  }, [totalPage, currentPage]);

  return (
    <PrdouctPageListUl>
      {currentPage >= maxPageNum && (
        <MinPageNum setCurrentPage={setCurrentPage} currentPage={currentPage} />
      )}
      {totalPageSlice.map((pageNum) => (
        <ProductPageNumber
          key={pageNum}
          pageNum={pageNum}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      ))}
      {currentPage <= totalPage - maxPageNum + 1 && (
        <MaxPageNum
          pageNum={totalPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </PrdouctPageListUl>
  );
};

export default ProductPageList;
