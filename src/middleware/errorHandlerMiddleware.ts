import type { Response, NextFunction, Request } from 'express';

import {
  ForbiddenError,
  ExceptionError,
  NotFoundError,
  ValidateError,
  UnauthorizedError,
} from '@/errors';
import { ConflictError } from '@/errors/ConflictError';

import { ControlledErrors } from '@/types';

export const errorHandlerMiddleware = (
  err: ControlledErrors | Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  // Erros controlados
  if (
    err instanceof ValidateError ||
    err instanceof NotFoundError ||
    err instanceof UnauthorizedError ||
    err instanceof ExceptionError ||
    err instanceof ConflictError ||
    err instanceof ForbiddenError
  ) {
    log(err, req.ip, req.method, req.url);

    return res.status(err.statusCode).json({
      message: err.message,
      trace: err.trace,
    });
  }

  // Erro não controlado
  log(err, req.ip, req.method, req.url);

  const message: ExceptionError = new ExceptionError('ERRXXXX', (err as Error)?.stack);
  return res.status(500).json(message);
};

const log = (err, ip, method, url) => {
  console.error({ err, ip, method, url: url });
};
