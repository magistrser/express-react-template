import { ValidationResult } from "joi";

export function joiThrow(validationResult: ValidationResult): void {
  if (validationResult.error) {
    throw new Error(`Joi validation error: ${validationResult.error.message}`);
  }
}
