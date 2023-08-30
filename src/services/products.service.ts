import { api } from './api.axios';
import { IListProductsResponse } from './products.types';

export const listProductsService = async (): Promise<IListProductsResponse> => {
  const response = await api.get<IListProductsResponse>(`/products`);
  return response.data;
};
