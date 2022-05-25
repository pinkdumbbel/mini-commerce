import { ProductFilteredListUl } from '../../pages/products/style';
import { BrandsAndColor, Categories } from '../../types/api';
import { FilterTypeList, FilterTypeUnion } from '../../types/common';
import ProductFilteredItem from './ProductFilteredItem';

interface ProductFilterListProps {
  itemList: BrandsAndColor | Categories;
  filterType: FilterTypeUnion;
}
const ProductFilterList: React.FC<ProductFilterListProps> = ({
  itemList,
  filterType,
}) => {
  return (
    <ProductFilteredListUl>
      {/* <ProductFilteredItem itemName='' categoryId={0} filterType={filterType} /> */}
      {filterType === FilterTypeList.CATEGORY
        ? (itemList as Categories).map((category) => {
            return (
              <ProductFilteredItem
                key={category.id}
                itemName={category.name}
                categoryId={category.id}
                filterType={filterType}
                depth={category.parent_id ? true : false}
              />
            );
          })
        : (itemList as BrandsAndColor).map((item) => (
            <ProductFilteredItem
              key={item.name}
              itemName={item.name}
              filterType={filterType}
            />
          ))}
    </ProductFilteredListUl>
  );
};

export default ProductFilterList;
