export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

export type IListProductsResponse = IProduct[];
