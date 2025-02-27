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
