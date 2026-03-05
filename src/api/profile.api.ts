import { api } from "./axios";

export interface Payment {
  id: string;
  status: string;
  amount: number;
  paymentDate: string;
  issuedSubscription: boolean;
}

export interface UserProfile {
  id: string;
  email: string;
  role: string;
  subscriptions: any[];
  payments: Payment[];
  activeSubscriptionId: string | null;
}

export const profile: () => Promise<UserProfile> = async () => {
  const res = await api.get("/users/profile");
  const payload = res?.data?.result ?? res?.data;

  if (!payload || typeof payload !== "object" || !("email" in payload)) {
    throw new Error("Unexpected /users/profile response shape");
  }

  return payload as UserProfile;
};
