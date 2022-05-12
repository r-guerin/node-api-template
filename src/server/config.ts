import { ValueOf } from '@src/types';
import { Request, Response, NextFunction } from 'express';

export const METADATA_PROPERTY = {
  routes: 'routes',
  prefix: 'prefix',
} as const;

export const REQUEST_METHOD = {
  get: 'get',
  post: 'post',
  delete: 'delete',
  options: 'options',
  put: 'put',
  head: 'head',
} as const;

export type Middleware = (req: Request, res: Response, next: NextFunction) => void;

export type RequestMethodValue = ValueOf<typeof REQUEST_METHOD>;

export type RouteDefinition = {
  path: string;
  requestMethod: RequestMethodValue;
  methodName: string;
  middlewares: Middleware[];
};
