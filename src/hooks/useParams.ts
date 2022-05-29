import { useLocation } from 'react-router-dom';
import { FilterTypeList } from '../types/common';

const useParams = () => {
  const { search } = useLocation();
  const urlSearchParams = new URLSearchParams(search);
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

export default useParams;
