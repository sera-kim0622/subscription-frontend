export const ErrorCode = {
  USER_EMAIL_DUPLICATED: "USER_EMAIL_DUPLICATED",
  AUTH_INVALID_CREDENTIALS: "AUTH_INVALID_CREDENTIALS",
} as const;

export type ErrorCodeType = (typeof ErrorCode)[keyof typeof ErrorCode];
