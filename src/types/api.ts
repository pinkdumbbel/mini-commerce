export interface Product {
  id: number; //상품 고유번호
  name: string; //상품명
  image: string; //상품 이미지 url
  category_id: number; //카테고리 번호
  brand: string; //브랜드명
  color: string; //색상명 ex) 'black'
  original_price: number; //정가
  sales_price: number; //판매가
  retailer_id: number;
}

export interface Products {
  products: Product[];
  total: number; //요청 조건에 맞는 전체 상품 수
}

export interface CategoryItem {
  id: number;
  parent_id: number | null;
  name: string;
}

export type BrandsAndColor = { name: string }[];

export type Categories = CategoryItem[];
