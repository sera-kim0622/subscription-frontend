import { PeriodType, Product } from "./product.api";

export interface PurchaseOrderResult {
  productId: number;
  name: string;
  type: PeriodType;
  price: number;
}

export interface PurchasePaymentOutput {
  id: number;
  pgPaymentId: string;
  status: string;
  amount: number;
  paymentDate: Date;
  issuedSubscription: boolean;
  createdAt: Date;
}

export interface Subscription {
  user: { id: number };
  payment: { id: number };
  product: Product;
  expiredAt: Date;
}

export enum PAYMENT_STATUS {
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
  PENDING = "PENDING",
}

export interface PortOneResult {
  /** 결제 트랜잭션 ID(고유 값으로 UUID) */
  pgPaymentId?: string;

  /** 결제 상태 */
  status: PAYMENT_STATUS;

  /** 결제 완료 시각 (성공한 경우만, ISO string) */
  paidAt?: string;

  /** 실패 사유 (실패한 경우만) */
  failReason?: string;
}
export interface PurchaseOutputDto {
  order: PurchaseOrderResult;
  payment?: PurchasePaymentOutput | null;
  subscription?: Subscription | null;
  resultMessage: string;
  pgPaymentResult: PortOneResult;
}

export const purchase = async () => {};
