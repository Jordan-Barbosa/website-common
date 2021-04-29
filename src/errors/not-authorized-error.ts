import { CustomError } from './base/custom-error';
import { StatusCode } from '../enums';

export class NotAuthorizedError extends CustomError {
  public statusCode = StatusCode.NOT_AUTHORIZED;

  constructor(public message = 'Not Authorized', public name = 'NotAuthorizedError') {
    super(message);

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);

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
