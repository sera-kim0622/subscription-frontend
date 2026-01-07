export type ValidationErrorResponse = {
  type: "VALIDATION_ERROR";
  errors: Record<string, string>;
};

export type BusinessErrorResponse = {
  code: string;
  message: string;
};
