import type { Request as ExpressRequest } from 'express';
import type { ParsedQs } from 'qs';
import type {
  ConflictError,
  ExceptionError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
  ValidateError,
} from '@/errors';

export type ControlledErrors =
  | ValidateError
  | NotFoundError
  | UnauthorizedError
  | ExceptionError
  | ConflictError
  | ForbiddenError;

export type Request<
  P = Record<string, string>,
  ResBody = unknown,
  ReqBody = unknown,
  ReqQuery = ParsedQs
> = ExpressRequest<P, ResBody, ReqBody, ReqQuery>;
