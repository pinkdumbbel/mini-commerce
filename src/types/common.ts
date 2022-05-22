export enum EndpointList {
  PRODUCTS = 'products',
  BRANDS = 'brands',
  COLOR = 'colors',
  CATEGORY = 'categories',
}

export enum FilterTypeList {
  BRAND = 'BRAND',
  COLOR = 'COLOR',
  CATEGORY = 'CATEGORY',
}

export type FilterTypeUnion =
  | FilterTypeList.BRAND
  | FilterTypeList.COLOR
  | FilterTypeList.CATEGORY;
