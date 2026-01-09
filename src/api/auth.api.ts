import { api } from "./axios";

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
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




