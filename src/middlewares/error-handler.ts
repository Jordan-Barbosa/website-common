import type { NextFunction, Request, Response } from 'express';

import { CustomError } from '../errors';

export function errorHandler(err: Error, _req: Request, res: Response, next: NextFunction) {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  if (res.headersSent) {
    return next();
  }

  return res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
}
