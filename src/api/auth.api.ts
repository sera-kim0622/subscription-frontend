import { api } from "./axios";

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type ProductType = "MONTHLY" | "YEARLY";
export type OrderType = "ASC" | "DESC";
export type SortByType = "createdAt" | "price" | "name";

export interface Product {
  id: number;
  name: string;
  type: ProductType;
  price: number;
  createdAt: string;
}

interface GetProductsParams {
  type?: ProductType;
  sortBy?: SortByType;
  order?: OrderType;
}

export interface SignupRequest {
  email: string;
  password: string;
  role: UserRole;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export const signup = (data: SignupRequest) => {
  return api.post("/users", data);
};

export const login = (data: LoginRequest) => {
  return api.post("/users/login", data);
};

export const getProducts = async (params: GetProductsParams): Promise<Product[]> => {
  const res = await api.get("/products", {
    params: {
      sortBy: params.sortBy ?? "price",
      order: params.order ?? "ASC",
    },
  });
  return res.data.result;
};
