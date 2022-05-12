import { NextFunction, Request, Response } from 'express';
import { ApiError } from '@src/models';

export const errors = (error: ApiError, _req: Request, res: Response, next: NextFunction): void => {
  if (res.headersSent) {
    next(error);
  }
  const status = error.status ?? 500;
  const { key, code, message } = error;
  res.status(status).json({ error: { key, code, message } });
};
