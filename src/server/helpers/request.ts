import { UnknownObject } from '@src/types';
import { Request, Response } from 'express';
import { ApiError, ERRORS_LIST } from '@src/models';

const respondWithSuccess = (res: Response, payload: UnknownObject): void => {
  res.status(200).json(payload);
};

const respondWithNoContent = (res: Response): void => {
  res.status(204).end();
};

const respondWithBadRequest = (res: Response, message: string): void => {
  res.status(400).json({ error: ERRORS_LIST.BAD_REQUEST, message });
};

const respondWithNotFound = (res: Response): void => {
  res.status(404).json({ error: ERRORS_LIST.RESOURCE_NOT_FOUND });
};

const useNotFoundRoute = (_req: Request, res: Response): void => {
  if (!res.headersSent) {
    respondWithNotFound(res);
  }
};

const propagateInternalError = (error: unknown): void | never => {
  const isInternalError = (error as ApiError)?.status === 500;

  if (isInternalError) {
    throw error;
  }
};

export {
  respondWithSuccess,
  respondWithNoContent,
  respondWithBadRequest,
  respondWithNotFound,
  useNotFoundRoute,
  propagateInternalError,
};
