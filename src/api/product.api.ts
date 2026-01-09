import { api } from "./axios";

export type PeriodType = "MONTHLY" | "YEARLY";
export type OrderType = "ASC" | "DESC";
export type SortByType = "createdAt" | "price" | "name";

export interface Product {
  id: number;
  name: string;
  type: PeriodType;
  price: number;
  createdAt: string;
}

interface GetProductsParams {
  type?: PeriodType;
  sortBy?: SortByType;
  order?: OrderType;
}

export const getProducts = async (params: GetProductsParams): Promise<Product[]> => {
  const res = await api.get("/products", {
    params: {
      sortBy: params.sortBy ?? "price",
      order: params.order ?? "ASC",
    },
  });
  return res.data.result;
};
