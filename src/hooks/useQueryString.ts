import { useLocation, useNavigate } from 'react-router-dom';

interface UseQueryStringProps {
  filterType?: string;
  itemName?: string;
  currentPage?: number;
  setCurrentPage?: (page: number) => void;
}
const useQueryString = (props?: UseQueryStringProps) => {
  const { search, pathname } = useLocation();
  const urlSearchParams = new URLSearchParams(search);
  const navigate = useNavigate();

  if (props) {
    if (props.filterType && props.itemName) {
      const { filterType, itemName } = props;
      urlSearchParams.set(filterType as string, itemName as string);
    }

    if (props.currentPage && props.setCurrentPage) {
      const { currentPage } = props;
      urlSearchParams.set('page', currentPage.toString());
    }
  }

  return () => {
    props?.setCurrentPage && props.setCurrentPage(props.currentPage as number);
    navigate(`${pathname}?${urlSearchParams.toString()}`);
  };
};

export default useQueryString;
