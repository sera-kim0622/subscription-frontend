export type ValidationErrorResponse = {
  type: "VALIDATION_ERROR";
  errors: Record<string, string>;
};
