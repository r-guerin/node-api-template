import { Application } from 'express';
import { loadErrors } from './errors';
import { loadMiddlewares } from './middlewares';
import { loadRoutes } from './routes';

export const load = (app: Application): void => {
  loadMiddlewares(app);
  loadRoutes(app);
  loadErrors(app);
};
