import { loggingMiddleware as log } from '@src/services';
import cors from 'cors';
import { Application, json } from 'express';
import helmet from 'helmet';

const MIDDLEWARES = [cors(), helmet(), json(), log()];

export const loadMiddlewares = (app: Application): void => {
  MIDDLEWARES.forEach((middleware) => {
    app.use(middleware);
  });
};
