import { CustomError } from './base';
import { StatusCode } from '../enums';

export class NotFoundError extends CustomError {
  statusCode = StatusCode.NOT_FOUND;

  constructor(public message = 'Not Found', public name = 'NotFoundError') {
    super(message);

    Object.setPrototypeOf(this, NotFoundError.prototype);

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
