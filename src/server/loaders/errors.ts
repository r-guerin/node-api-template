import { Application } from 'express';
import { useNotFoundRoute } from '../helpers';
import { errors } from '../middlewares';

export const loadErrors = (app: Application): void => {
  app.use(errors);
  app.use(useNotFoundRoute);
};
