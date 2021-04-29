import { CustomError } from './base/custom-error';
import { StatusCode } from '../enums';

export class DatabaseConnectionError extends CustomError {
  public statusCode = StatusCode.INTERNAL_SERVER;

  constructor(public message = 'Error connecting to database', public name = 'DatabaseConnectionError') {
    super(message);

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);

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
