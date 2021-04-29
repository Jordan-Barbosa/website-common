import { StatusCode } from '../../enums';

interface SerializedError {
  message: string;
  name: string;
  field?: string;
}

export abstract class CustomError extends Error {
  abstract readonly statusCode: StatusCode;
  abstract readonly name: string;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): SerializedError[];
}
