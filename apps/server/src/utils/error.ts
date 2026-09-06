import type { ValidationErrorItem } from "joi";
import { CustomError, type ErrorProps } from "@kamalyb/errors";

export class JoiValidationError extends CustomError {
  readonly status = 422;

  readonly name = "ValidationError";

  constructor(public errors: ValidationErrorItem[]) {
    super(errors.map((error) => error.message).join(", "));
  }

  serialize(): ErrorProps[] {
    return this.errors.map((error) => ({
      message: error.message,
      path: error.path.join(".")
    }));
  }
}
