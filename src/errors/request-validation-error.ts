import { ValidationError } from 'express-validator';
import { CustomError } from './base/custom-error';
import { StatusCode } from '../enums';

export class RequestValidationError extends CustomError {
  public statusCode = StatusCode.BAD_REQUEST;

  constructor(public errors: ValidationError[], public name = 'RequestValidationError') {
    super('Invalid request parameters');

    Object.setPrototypeOf(this, RequestValidationError.prototype);

    CustomError.captureStackTrace(this);
  }

  serializeErrors() {
    return this.errors.map(error => ({
      message: error.msg,
      name: this.name,
      field: error.param,
    }));
  }
}
