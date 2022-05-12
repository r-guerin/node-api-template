import { logger } from '@src/services';
import express from 'express';
import { load } from './loaders';

export const launchServer = async (): Promise<void> => {
  const app = express();
  const port = process.env.PORT ?? '3000';

  load(app);

  app.listen(port, () => {
    logger.info(`server started at http://localhost:${port}`);
  });
};
