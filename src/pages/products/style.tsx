import styled from '@emotion/styled';

interface CategoryProps {
  depth: boolean;
}

export const ContentWrapDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
`;
export const ProductsWrapDiv = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
`;

export const ProductItemDiv = styled.div`
  box-sizing: border-box;
  padding-right: 20px;
  width: 25%;
  margin-bottom: 30px;
`;

export const ProductImageImg = styled.img`
  max-width: 100%;
`;

export const ProductDescriptionDiv = styled.div`
  margin-top: 10px;
`;

export const ProductDescriptionRowSpan = styled.span`
  font-family: 'Favorit SSENSE Inter', 'Helvetica Neue', Helvetica, Arial,
    sans-serif, sans-serif;
  text-align: left;
  display: block;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.09px;
`;

export const ProductPageNationWrapDiv = styled.div`
  margin: 0 auto;
  width: 60%;
  margin-top: 100px;
`;

export const PrdouctPageListUl = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const ProductPageNumberLi = styled.li`
  margin-right: 12.5px;
  margin-left: 12.5px;
  font-family: 'Favorit SSENSE Inter', 'Helvetica Neue', Helvetica, Arial,
    sans-serif, sans-serif;
  text-align: left;
  display: block;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.09px;
  cursor: pointer;
`;

export const ProductFilterWrapDiv = styled.div`
  box-sizing: border-box;
  padding-top: 30px;
  width: 10%;
`;

export const ProductFilterSelectDiv = styled.div`
  max-width: 120px;
  margin-top: 20px;
`;

export const ProductFilterSelectBtn = styled.button`
  font-family: 'Favorit SSENSE Inter';
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: 0;
  border: 0;
  outline: 0;
  padding: 0;
  width: 100%;
  cursor: pointer;
`;

export const ProductFilterTitleSpan = styled.span`
  text-align: left;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Favorit SSENSE Inter', 'Helvetica Neue', Helvetica, Arial,
    sans-serif, sans-serif;
  text-align: left;
  font-size: 11px;
  letter-spacing: 0.09px;
`;

export const ProductFilterSelectIconSvg = styled.svg`
  width: 9px;
  height: 6px;
  fill: none;
`;

export const ProductFilteredListUl = styled.ul`
  margin: 8px 0 0 0;
  padding: 0;
  text-transform: capitalize;
  list-style: none;
`;

export const ProductFilteredItemLi = styled.li<CategoryProps>`
  margin-bottom: 2px;
  font-family: 'Favorit SSENSE Inter', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 11px;
  line-height: 1.36;
  letter-spacing: 0.09px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #000;
  box-sizing: border-box;
  padding-left: ${(props) => (props.depth ? '20px' : '0px')};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ProductFilteredItemSpan = styled.span`
  font-family: 'Favorit SSENSE Inter', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 11px;
  line-height: 1.36;
  letter-spacing: 0.09px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #000;
`;
