import { router as pingRouter } from '@src/domains/ping';
import { Application } from 'express';

const ROUTERS = [pingRouter];

export const loadRoutes = (app: Application): void => {
  ROUTERS.forEach((router) => {
    app.use(router);
  });
};
