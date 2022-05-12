import { Request } from 'express';
import { Result, ValidationError, validationResult } from 'express-validator';
import { Middleware } from '../config';
import { respondWithBadRequest } from '../helpers';

const validationErrorFormatter = ({ location, param, msg, value }: ValidationError): string => {
  return `${location}[${param}]: ${msg} (received: ${value && JSON.stringify(value)})`;
};

const formattedValidationResult = (req: Request) => {
  return validationResult(req).formatWith(validationErrorFormatter);
};

const readFirstError = (errors: Result<string>): string => {
  return errors.array({ onlyFirstError: true }).shift() ?? '';
};

export const validationMiddleware: Middleware = (req, res, next) => {
  const errors = formattedValidationResult(req);

  if (errors.isEmpty()) {
    next();
  } else {
    const errorMessage = readFirstError(errors);
    respondWithBadRequest(res, errorMessage);
  }
};
