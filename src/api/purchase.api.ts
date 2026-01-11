import { api } from "./axios";
import { PeriodType, Product } from "./product.api";

export interface PurchaseOrderResult {
  productId: number;
  name: string;
  type: PeriodType;
  price: number;
}

export interface PaymentOutput {
  id: number;
  pgPaymentId: string;
  status: string;
  amount: number;
  paymentDate: string;
  failReason: string | null;
  issuedSubscription: boolean;
}

export interface Subscription {
  user: { id: number };
  payment: { id: number };
  product: Product;
  expiredAt: string;
}

export enum PAYMENT_STATUS {
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
  PENDING = "PENDING",
}

export enum PurchaseResultStatus {
  SUCCESS = "SUCCESS", // 결제 성공 + 구독 성공
  SUBSCRIPTION_FAILED = "SUBSCRIPTION_FAILED", // 결제 성공 + 구독 실패
  PAYMENT_FAILED = "PAYMENT_FAILED", // 결제 실패
}

export interface PurchaseOutputDto {
  order: PurchaseOrderResult;
  payment: PaymentOutput;
  subscription?: Subscription;
  resultMessage: string;
  resultStatus: PurchaseResultStatus;
}

export interface PurchaseInputDto {
  productId: number;
  simulate: "success" | "fail" | "subscription_fail";
}

export const purchase = async (data: PurchaseInputDto): Promise<PurchaseOutputDto> => {
  const res = await api.post("/payments/purchase", data);

  return res.data;
};
