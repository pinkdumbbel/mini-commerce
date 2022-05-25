import { useLocation, useNavigate } from 'react-router-dom';
import { FilterTypeList } from '../types/common';

const useQueryString = (filterType?: string, itemName?: string) => {
  const { search, pathname } = useLocation();
  const urlSearchParams = new URLSearchParams(search);
  const navigate = useNavigate();

  if (filterType && itemName) {
    return () => {
      urlSearchParams.set(filterType, itemName);
      navigate(`${pathname}?${urlSearchParams.toString()}`);
    };
  }

  const params: { [key: string]: string | number } = {};

  urlSearchParams.forEach((val, key) => {
    if (key === FilterTypeList.CATEGORY.toLocaleLowerCase()) {
      params[`${key}Id`] = val;
    } else {
      params[key] = val;
    }
  });

  if (Object.keys(params).length === 0) return { page: 1 };

  return params;
};

export default useQueryString;
