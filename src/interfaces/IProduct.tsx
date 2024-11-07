export interface IProduct {
  idProduct: number;
  name: string;
  caracteristicas: string;
  _links: IProductList;
}

interface IProductList {
  href: string;
}