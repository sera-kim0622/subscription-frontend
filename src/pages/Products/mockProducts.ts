export type ProductType = "MONTHLY" | "YEARLY";

export interface Product {
  id: number;
  name: string;
  type: ProductType;
  price: number;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Basic",
    type: "MONTHLY",
    price: 10000,
  },
  {
    id: 2,
    name: "Pro",
    type: "MONTHLY",
    price: 30000,
  },
  {
    id: 3,
    name: "Enterprise",
    type: "YEARLY",
    price: 1000000,
  },
  {
    id: 4,
    name: "Enterprise",
    type: "MONTHLY",
    price: 100000,
  },
];
