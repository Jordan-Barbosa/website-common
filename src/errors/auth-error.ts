import { CustomError } from './base/custom-error';
import { StatusCode } from '../enums';

export class AuthError extends CustomError {
  public statusCode = StatusCode.NOT_AUTHORIZED;

  constructor(public message = 'Authentication Error', public name = 'AuthError') {
    super(message);

    Object.setPrototypeOf(this, AuthError.prototype);

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
