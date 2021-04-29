import { CustomError } from './base/custom-error';
import { StatusCode } from '../enums';

export class BadRequestError extends CustomError {
  public statusCode = StatusCode.BAD_REQUEST;

  constructor(public message = 'Bad Request Error', public name = 'BadRequestError') {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);

    CustomError.captureStackTrace(this);
  }

  serializeErrors() {
    return [
      {
        message: this.message,
        name: this.name,
      },
    ];
  }
}
