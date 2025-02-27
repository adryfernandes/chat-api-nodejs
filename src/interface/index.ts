import type { Request as ExpressRequest } from 'express';
import type * as expressCore from 'express-serve-static-core';

export type Request<
  P = expressCore.ParamsDictionary,
  ResBody = unknown,
  ReqBody = unknown,
  ReqQuery = expressCore.Query
> = ExpressRequest<P, ResBody, ReqBody, ReqQuery>;
